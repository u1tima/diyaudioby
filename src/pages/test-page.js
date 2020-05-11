import React from 'react';
import Layout from '../layout/template/layout';
import Sidebar from '../layout/sidebar/sidebar';
import Content from '../layout/content/content';
import Elcap from '../components/Elcap/Elcap';
import ElcapList from '../components/ElcapList/ElcapList';
import components from '../data/database/elcap';

export default () => (
  <Layout>
    <Sidebar side='left'></Sidebar>
    <Content>

      <ElcapList>
        {components.map((item, index) => (<Elcap key={index} comp={item} />))}
      </ElcapList>

    </Content>
  </Layout>
)