import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

const LoaderComp = () => {
  return (
    <div className="Button-wraper">
      <Loader
        type= "Puff"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000} //3 secs
      />
    </div>
  );
};

 export default LoaderComp;

// import Loader from "react-loader-spinner";
// export default class App extends React.Component {
//   //other logic
//   render() {
//     return (
//       <Loader
//         type="Puff" "TailSpin"
//         color="#00BFFF"
//         height={100}
//         width={100}
//         timeout={3000} //3 secs
//       />
//     );
//   }
// }