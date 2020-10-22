import React, { useState, useEffect, createContext } from 'react';
import { Switch, Route } from 'react-router-dom';
import axios from 'axios';
import TopBar from './ui/TopBar/TopBar';
import Footer from './ui/Footer/Footer';
import App from './App';
import Pricing from './pages/Pricing/Pricing';
import About from './pages/About/About';
import GetYours from './pages/GetYours/GetYours';
import Artwork from './pages/Artwork/Artwork';

export const AppContext = createContext();
export const CustomerContext = createContext();

const logoColors = ['2a34ff', '008300', 'ff62b8', 'fc0000', '00edf0'];
const Routes = () => {
  const [preferredMethod, setPreferredMethod] = React.useState('');
  const [images, setImages] = useState([]);
  const [info, setInfo] = useState({});
  const [status, setStatus] = useState({
    loading: false,
    success: null,
  });
  const [index, setIndex] = useState(
    Math.floor(Math.random() * logoColors.length)
  );

  const handleTextArea = (e) => {
    setInfo((info) => {
      return {
        ...info,
        comments: e.target.value,
      };
    });
  };

  const submitForm = () => {
    setStatus({ loading: true, success: null });
    axios
      .post('/email?email=jay@sargentassociates.com', {
        name: 'Jay Sargent',
        subject: 'Website Inquiry',
        message: info,
        email: 'jay@sargentassociates.com',
      })
      .then(() => {
        setStatus({
          loading: false,
          success: true,
        });
      })
      .catch(() => {
        setStatus({
          loading: false,
          success: false,
        });
      });
  };

  useEffect(() => {
    axios.get('https://www.instagram.com/scottyscustoms/?__a=1').then((res) => {
      // grabbing the nested data
      const {
        data: {
          graphql: {
            user: {
              edge_owner_to_timeline_media: { edges: mainImages },
            },
          },
        },
      } = res;

      // looping down to find the ig section with all the pictures
      const finalImages = [];

      mainImages.forEach((edge) => {
        const { node } = edge;
        // code for single image
        finalImages.push(node.display_url);

        // code for all images
        // const {
        //   edge_sidecar_to_children: { edges },
        // } = node;

        // edges.forEach((nestedEdge) => {
        //   const { node: nestedNode } = nestedEdge;
        //   finalImages.push(nestedNode.display_url);
        // });
      });

      setImages(finalImages);
    });
  }, []);

  return (
    <AppContext.Provider
      value={{
        images,
        index,
        setIndex,
        logoColors,
        preferredMethod,
        setPreferredMethod,
      }}
    >
      <CustomerContext.Provider
        value={{ info, setInfo, handleTextArea, submitForm, status }}
      >
        <TopBar />
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/pricing" component={Pricing} />
          <Route path="/about" component={About} />
          <Route path="/artwork" component={Artwork} />
          <Route path="/getyours" component={GetYours} />
        </Switch>
        <Footer />
      </CustomerContext.Provider>
    </AppContext.Provider>
  );
};
export default Routes;
