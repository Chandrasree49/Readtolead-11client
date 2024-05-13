import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const TabCat = () => {
  return(
    
  <Tabs>
    <div className='container px-6 py-10 mx-auto'>
   <div className='flex items-center justify-center'>
   <TabList>
    <Tab>History</Tab>
      <Tab>Mysteries</Tab>
      <Tab>Science & Math</Tab>
      
      <Tab>Horror</Tab>
      
      
    </TabList>
    <button className="btn btn-outline btn-primary">Primary</button>
   </div>

    <TabPanel>
      <h2>Any content 1</h2>
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
    </div>
  </Tabs>
 
);
  
}

export default TabCat