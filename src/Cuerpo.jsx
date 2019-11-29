import React from 'react';

class Cuerpo extends React.Component{

     constructor(){
super();
this.state = {

    txt: 'this is the text',
    cat: 0,
}

     }

update(e){
    this.setState({txt: e.target.value})
}

    render(){
        return (
        <div>
                 <h1>{ this.state.txt} - {this.state.cat}</h1><input type="text"
            onChange={ this.update.bind(this) } />
           
        </div>
        )
    }
}



export default  Cuerpo