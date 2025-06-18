import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import NamePerson from './NamePerson';
import PeopleList from './PeopleList';
import PeopleTable from './PeopleTable';
import PersonDetails from "./PersonDetails";
import FirstTeenager from './FirstTeenager';
import AreAllTeenagers from './AreAllTeenagers';
import SortedPeople from './sortPeople';
import GroupedPeople from './groupByOccupation';
import AverageAge from './averageAgeByOccupation';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <NamePerson/>
    <PersonDetails />
    <PeopleList />
    <PeopleTable/>
    <FirstTeenager/>
    <AreAllTeenagers/>
    <SortedPeople/>
    <GroupedPeople/>
    <AverageAge/>
  </React.StrictMode>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
