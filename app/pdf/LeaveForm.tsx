import React from 'react';
import { Page, Text, View, Document, StyleSheet, Font, Image} from '@react-pdf/renderer';


Font.register({ family: 'Sarabun', src: '/fonts/Sarabun-Regular.ttf'});
Font.register({ family: 'Sarabun', src: '/fonts/Sarabun-SemiBold.ttf'});

type leaveType = "sick" | "maternity" | "business" | "vocation";

const currentDate = new Date();
const getDate = currentDate.toLocaleDateString();
const getTime = currentDate.toLocaleTimeString();
const dateNow = currentDate.toLocaleString();

interface Props {
    //Empoyee Details
    employeeName: string,
    department: string,
    jobTitle: string,
    managerName: string,
    employeeDescription?: string,

    //Leave Request
    leaveRequest: number,
    leavetType: leaveType,
    start: string,
    end: string,
}

const styles = StyleSheet.create({
  page: {
    paddingHorizontal: 30,
    paddingVertical: 30,
    backgroundColor: '#fff',
    fontFamily: 'Sarabun',
  },
  content:{
    border: 0.7,
    flexGrow: 1
  },
  justifiedText: {
    textAlign: 'justify',
    lineHeight: 1.5,
  },
  inline: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  table: {
    display: 'flex',
    width: 'auto',
    borderStyle: 'solid',
    borderColor: '#000',
    borderWidth: 1,
    borderRightWidth: 0,
    borderBottomWidth: 0,
  },
  tableRow: {
    flexDirection: 'row',
  },
  tableColHeader: {
    width: '100%',
    borderStyle: 'solid',
    backgroundColor: '#BE9A74',
    fontWeight: 'bold',
    padding: 5,
    fontSize: 12,
    color: "#fff"
  },
  tableCol3: {
    width: '33.33%',
    borderStyle: 'solid',
    borderColor: '#BE9A74',
    borderWidth: 1,
    borderTopWidth: 0,
    padding: 7,
    fontSize: 9,
    color: '#000',
  },
  tableCol4: {
    width: '25%',
    borderStyle: 'solid',
    borderColor: '#BE9A74',
    borderWidth: 1,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    padding: 7,
    fontSize: 9,
    color: '#000',
  },
  tableCol1: {
    color: '#000',
    width: '100%',
    borderStyle: 'solid',
    borderColor: '#BE9A74',
    borderWidth: 1,
    borderTopWidth: 0,
    padding: 7,
    fontSize: 9,
  },
  flex:{
    display: 'flex', 
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'center'
  }
});

const LeaveForm : React.FC<Props> = (prop) => {
    console.log('Props: ', prop);
    return (
    <Document language='utf-8' >
        <Page size="A4" style={styles.page}>
            <Text style={{fontWeight: 'bold', color: '#BE9A74', fontSize: 22}}>LEAVE REQUEST FORM</Text>
            <View style={{marginTop: 10}}>
                <View style={styles.tableColHeader}>
                    <Text style={{fontWeight: 'bold'}}>How to submit a leave request</Text>
                </View>
                <View style={styles.tableCol1}>
                    <Text>1. Fill out the leave request form with accurate details.</Text>
                    <Text>2. Submit the form to your direct manager for approval, with HR copied(CC) on the email.</Text>
                    <Text>3. Once approve, HR will verify and process the request.</Text>
                    <Text>4. HR will provide a copy of the approved request for your recodes.</Text>
                </View>
            </View>
            <View style={{marginTop: 7}}>
                <View style={styles.tableColHeader}>
                    <Text style={{fontWeight: 'bold'}}>Employee details</Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <View style={{...styles.tableCol4, borderLeftWidth: 1}}>
                        <Text style={{fontWeight: 'bold'}}>Empoyee Name</Text>
                    </View>
                    <View style={{...styles.tableCol4}}>
                        <Text>{prop.employeeName}</Text>
                    </View>
                    <View style={{...styles.tableCol4}}>
                        <Text style={{fontWeight: 'bold'}}>Department</Text>
                    </View>
                    <View style={{...styles.tableCol4}}>
                        <Text>{prop.department}</Text>
                    </View>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <View style={{...styles.tableCol4, borderLeftWidth: 1}}>
                        <Text style={{fontWeight: 'bold'}}>Job title</Text>
                    </View>
                    <View style={{...styles.tableCol4}}>
                        <Text>{prop.jobTitle}</Text>
                    </View>
                    <View style={{...styles.tableCol4}}>
                        <Text style={{fontWeight: 'bold'}}>Manager/Supervisor name</Text>
                    </View>
                    <View style={{...styles.tableCol4}}>
                        <Text>{prop.managerName}</Text>
                    </View>
                </View>
            </View>
            <View style={{marginTop: 7}}>
                <View style={styles.tableColHeader}>
                    <Text style={{fontWeight: 'bold'}}>Leave request details</Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <View style={{...styles.tableCol4, borderLeftWidth: 1}}>
                        <Text style={{fontWeight: 'bold'}}>Leave Request</Text>
                    </View>
                    <View style={{...styles.tableCol4, width: '75%'}}>
                        <Text>{prop.leaveRequest}                       {prop.leaveRequest > 1 ? 'DAYS' : 'DAY'}</Text>
                    </View>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <View style={{...styles.tableCol4, borderLeftWidth: 1}}>
                        <Text style={{fontWeight: 'bold'}}>Starting on</Text>
                    </View>
                    <View style={{...styles.tableCol4}}>
                        <Text>{prop.start}</Text>
                    </View>
                    <View style={{...styles.tableCol4}}>
                        <Text style={{fontWeight: 'bold'}}>Ending on</Text>
                    </View>
                    <View style={{...styles.tableCol4}}>
                        <Text>{prop.end}</Text>
                    </View>
                </View>
            </View>
            <View style={{marginTop: 7}}>
                <View style={styles.tableColHeader}>
                    <Text style={{fontWeight: 'bold'}}>Reason for leave request</Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <View style={styles.tableCol1}>
                        <View style={{flexDirection: 'row'}}>
                            <View style={{...styles.flex, width: "25%"}}>
                                <Image style={{width: 10, height: 10}} src={prop.leavetType == "sick" ? '/img/check.png' : '/img/uncheck.png'}></Image>
                                <Text style={{fontWeight: 'bold', marginLeft:3}}>Sick Leave</Text>
                            </View>
                            <View style={{...styles.flex, width: "25%"}}>
                                <Image style={{width: 10, height: 10}} src={prop.leavetType == "maternity" ? '/img/check.png' : '/img/uncheck.png'}></Image>
                                <Text style={{fontWeight: 'bold', marginLeft:3}}>Maternity Leave</Text>
                            </View>
                            <View style={{...styles.flex, width: "25%"}}>
                                <Image style={{width: 10, height: 10}} src={prop.leavetType == "business" ? '/img/check.png' : '/img/uncheck.png'}></Image>
                                <Text style={{fontWeight: 'bold', marginLeft:3}}>Business Leave</Text>
                            </View>
                            <View style={{...styles.flex, width: "25%"}}>
                                <Image style={{width: 10, height: 10}} src={prop.leavetType == "vocation" ? '/img/check.png' : '/img/uncheck.png'}></Image>
                                <Text style={{fontWeight: 'bold', marginLeft:3}}>Vocation Leave</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
            <View style={{marginTop: 7}}>
                <View style={styles.tableColHeader}>
                    <Text style={{fontWeight: 'bold'}}>I confirm that the infomation provided in this leve request form is accurate and complete.</Text>
                    <Text style={{fontWeight: 'bold'}}>I understand that this request is subject to approval by my employer.</Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <View style={{...styles.tableCol4, borderLeftWidth: 1}}>
                        <Text style={{fontWeight: 'bold'}}>Employee signature</Text>
                    </View>
                    <View style={{...styles.tableCol4, width: "75%"}}>
                        <Text></Text>
                    </View>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <View style={{...styles.tableCol4, borderLeftWidth: 1}}>
                        <Text style={{fontWeight: 'bold'}}>Date</Text>
                    </View>
                    <View style={{...styles.tableCol4, width: "75%"}}>
                        <Text></Text>
                    </View>
                </View>
            </View>
            <View style={{marginTop: 7}}>
                <View style={styles.tableColHeader}>
                    <Text style={{fontWeight: 'bold'}}>Note and Comments(Optional)</Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <View style={{...styles.tableCol1, height: 60}}>
                        <Text></Text>
                    </View>
                </View>
            </View>
            <View style={{ height: 0.5, backgroundColor: '#000', marginVertical: 20 }} />
            <View>
                <View style={styles.tableColHeader}>
                    <Text style={{fontWeight: 'bold'}}>Employer's decision.</Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <View style={{...styles.tableCol1, padding:15}}>
                        <View style={{flexDirection: 'row'}}>
                            <View style={{...styles.flex, width: "50%"}}>
                                <Image style={{width: 10, height: 10}} src={'/img/uncheck.png'}></Image>
                                <Text style={{fontWeight: 'bold', marginLeft:3}}>Approved</Text>
                            </View>
                            <View style={{...styles.flex, width: "50%"}}>
                                <Image style={{width: 10, height: 10}} src={'/img/uncheck.png'}></Image>
                                <Text style={{fontWeight: 'bold', marginLeft:3}}>Rejected</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <View style={{...styles.tableCol4, borderLeftWidth: 1}}>
                        <Text style={{fontWeight: 'bold'}}>Employer representative signature</Text>
                    </View>
                    <View style={{...styles.tableCol4, width: "75%"}}>
                        <Text></Text>
                    </View>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <View style={{...styles.tableCol4, borderLeftWidth: 1}}>
                        <Text style={{fontWeight: 'bold'}}>Date</Text>
                    </View>
                    <View style={{...styles.tableCol4, width: "75%"}}>
                        <Text></Text>
                    </View>
                </View>
            </View>
            <View style={{textAlign: 'right', marginTop: 10, fontSize: 8}}>
                <Text>Created Date: {dateNow}</Text>
            </View>
        </Page>
    </Document>
    )
};

export default LeaveForm
