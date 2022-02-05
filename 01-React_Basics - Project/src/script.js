let names = ["Ali", "Orhan", "Veli", "Kanık"];
let arr = [<h2>Congragulations</h2>, <h3>React is awesome</h3>];

class HelloMessage extends React.Component {
  render() {
      console.log(this.props)
    return (
      <div>
        <h1>Hello world!</h1>
        <HelloNames gonder={names}/>
        <div>{this.props.message
.map((item,i)=>{return <div key={i}> {item}</div>})}</div>
        {/* <div>
          {arr[0]}
          {arr[1]}
        </div> */}
      </div>
    );
  }
}

class HelloNames extends React.Component {
    static propTypes={newname:PropTypes.array}
    render() {
        return (
            <NoteList newname={
                this.props.gonder.map((item, i) => {
                return <li className={i==0 ? "first" : i==1 ? "second" : i==2 ? "third" : "first"} key={i}>{item}</li>;
              })}/>
            
        )
    }
}

class NoteList  extends React.Component {
    render() {
        console.log(this.props.newname)
        return (
            <ol>
{this.props.newname}

            </ol>
            
              )
        
    }}

ReactDOM.render(
  <div>    
    <App />
  </div>,
  document.getElementById("root")
);

function App() {
  return (
    <div>
        <HelloMessage message={arr}/>
      {/* <h2>Hello from App Function</h2> */}
    </div>
  );
}