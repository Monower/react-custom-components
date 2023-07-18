import Accordion from "./components/accordion/Accordion"







export default function App() {
  const data = [
    {
      question: 'can i open account?',
      answer: 'no.'
    },
    {
      question: 'can i open account?1',
      answer: 'no1.'
    },
    {
      question: 'can i open account?2',
      answer: 'no.2'
    },
    {
      question: 'can i open account?3',
      answer: 'no.3'
    },
  ];
  return (
    <>
      <Accordion data={data} />
    </>
  )
}
