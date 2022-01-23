import Header from './components/Header'
import Tasks from './components/Tasks';

function App() {
  const tasks = [
    {
      id: 1,
      text: 'Doctors Appointment',
      day: '14th February',
      reminder: false
    },
    {
      id: 2,
      text: 'Hairdressers Appointment',
      day: '15th February',
      reminder: true
    },
    {
      id: 3,
      text: 'Go to the movies with Catherine',
      day: '16th February',
      reminder: true
    }
  ]
  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks}/>
    </div>
  );
}

export default App;
