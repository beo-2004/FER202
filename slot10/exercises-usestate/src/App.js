import Example1_Counter from './Components/Example1_Counter';
import Example2_NameAge from './Components/Example2_NameAge';
import Example3_CheckboxProducts from './Components/Example3_CheckboxProducts';
import Example4_RadioProducts from './Components/Example4_RadioProducts';
import { Exercise12_1_Counter } from './Components/Exercise12_1_Counter';
import { Exercise12_2_ControlledInput } from './Components/Exercise12_2_ControlledInput';
import { Exercise12_3_ToggleVisibility } from './Components/Exercise12_3_ToggleVisibility';
import Exercise12_4_TodoList from './Components/Exercise12_4_TodoList';
import Exercise12_5_ColorSwitcher from './Components/Exercise12_5_ColorSwitcher';
import Exercise12_6_SearchFilter from './Components/Exercise12_6_SearchFilter';
import Exercise12_7_DragDropList from './Components/Exercise12_7_DragDropList';
function App() {

  return ( 
    <div>
      <Example1_Counter />
      <Example2_NameAge />
      <Example3_CheckboxProducts />
      <Example4_RadioProducts />
      <Exercise12_1_Counter/>
      <Exercise12_2_ControlledInput/>
      <Exercise12_3_ToggleVisibility/>
      <Exercise12_4_TodoList/>
      <Exercise12_5_ColorSwitcher/>
      <Exercise12_6_SearchFilter/>
      <Exercise12_7_DragDropList/>
    </div>
  );
}
 export default  App     
