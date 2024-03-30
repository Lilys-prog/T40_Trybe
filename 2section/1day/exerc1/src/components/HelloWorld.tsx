import ModuleDetails from './ModuleDetails';
import Title from './Title';
import { calculateAge } from '../utils/age';

function HelloWorld() {
  const name = 'John Connor';
  const birth = '11/02/1989';
  const age = calculateAge(birth);

  return (
    <>
      <h1 style={ { color: 'green', textAlign: 'center' } }>{name}</h1>
      <p>{`Age ${age}`}</p>
      <Title />
      <ModuleDetails />
    </>
  );
}

export default HelloWorld;
