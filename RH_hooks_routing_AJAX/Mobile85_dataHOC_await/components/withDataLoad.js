import React from 'react';

let withDataLoad = (fetchConfig,propName) => Component => {

    class ComponentWithDataLoad extends React.Component {

        state = {
          dataReady: false, // готовы ли данные
        };

        componentDidMount() {
          this.loadData();
        }
      
        loadData = async () => {
      
          try {
            let response=await fetch(fetchConfig.URL, fetchConfig);
            if (!response.ok) {
              throw new Error("fetch error " + response.status);
            }
            let data=await response.json();
            this.setState({
              dataReady:true,
              loadedData:data,
            });
          } 
          catch ( error )  {
            console.error(error.message);
          }
      
        };
      
        render() {
      
          if ( !this.state.dataReady )
            return <div>загрузка данных...</div>;
          
          let compProps={
            ...this.props,
            [propName]:this.state.loadedData
          };
          /*
          это то же самое что и:
          let compProps={...this.props};
          compProps[propName]=this.state.loadedData;
          */
          return <Component {...compProps} /> ;
        }
      
      }

      return ComponentWithDataLoad;

}

export { withDataLoad };
