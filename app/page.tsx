'use client'
import LeaveForm from './pdf/LeaveForm'
import { pdf } from '@react-pdf/renderer';

export default function Home() {
  const onSubmit = async (data: any) =>{
    const doc = <LeaveForm employeeName="Ku-eliyas Samudo" department="test" jobTitle="test" managerName="ceo" leaveRequest={5} leavetType="business" start="test" end="test" />;
    const asPdf = pdf(); 
    asPdf.updateContainer(doc);
    const blob = await asPdf.toBlob();
    const pdfUrl = URL.createObjectURL(blob);
    window.open(pdfUrl, '_blank');

    //Optional: Revoke URL later to free memory
    setTimeout(() => URL.revokeObjectURL(pdfUrl), 10000);
  }
  return (
    <div>
      <button onClick={onSubmit}>test</button>
    </div>
  );
}
