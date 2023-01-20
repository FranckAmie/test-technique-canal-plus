import './home.css';
import * as React from "react";
import TabsCustom from "../component/Tabs";

export const Home = () => {


  const populaires = [
    {
      id: 1,
      tabTitle: 'En streaming ',
      title: 'popular',
      type: 'movie/top_rated',
    },
    {
      id: 2,
      tabTitle: 'À la télévision ',
      title: 'À la télévision',
      type: 'tv/popular',

    },
    {
      id: 3,
      tabTitle: 'À louer',
      title: 'Title 3',
      type: 'tv/popular',
    },
    {
      id: 4,
      tabTitle: 'Au cinéma',
      title: 'Title 4',
      type: 'tv/airing_today',
    }
  ];

  return (
      <div>
        <TabsCustom  tabs = {populaires}/>
      </div>

  );
};

export default Home;
