import React from 'react';

class SearchBar extends React.Component{
  constructor(props){
    super(props);
    this.state={
 term:""
    };
  }

 onInputChange(event){

   this.setState({term:event.target.value});
 }
//this render as render:function(){  }
  render(){
    return(
      <div>

           <input type="text" onChange={this.onInputChange.bind(this)} value={this.state.term} />
           
      </div>

    );



  }

}
export default SearchBar;
