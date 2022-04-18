
import './assets/css/App.css';
import { Card } from './components/Card';
import { Form } from './components/Form';
import { NavBar } from './components/NavBar';
import { useWeather } from './components/useWeather';

function App() {

  const onSubmit = (value) => {
    submitRequest(value);
  };

  const { submitRequest, weather,loading,isError,coming, show,icon } = useWeather();

  return (
    <div className="App">
      <NavBar />
      <Form search={onSubmit}/>
      <Card 
        weather={weather}
        loading={loading}
        isError={isError}
        coming={coming}
        show={show}
        icon={icon}
        
      />
      
    </div>
  );
}

export default App;
