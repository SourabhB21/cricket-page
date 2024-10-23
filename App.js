import './App.css';
import defenders from './defenders';
import forwards from './forwards';
import keepers from './keepers';
import midfielders from './midfielders';
import Player from './Player';


function App(props) {
 const forward = forwards.map( f => {
  return <Player
  image={f.image}
  name={f.name}
  jersey={f.jersey}
  iplTeam={f.iplTeam}
  />
  })

  const def = defenders.map( m =>{
    return <Player
     image={m.image}
     name={m.name} 
     jersey={m.jersey}
     iplTeam={m.iplTeam}
    />
  })
 

 const mid = midfielders.map( b =>{
    return <Player
    image={b.image}
    name={b.name}
    jersey={b.jersey}
    iplTeam={b.iplTeam}
    />
  })

  const kip = keepers.map( wk =>{
    return <Player
    image={wk.image}
    name={wk.name}
    jersey={wk.jersey}
    iplTeam={wk.iplTeam}
    />
})



  return(
    <center>
      <div className='outerdiv'>
        <div className='fdiv'>
          {forward}
          </div>
          <div className='mdiv'>
            {mid}
          </div>
          <div className='ddiv'>
            {def}
          </div>
          <div className='gdiv'>
            {kip} 
         </div>
         </div>
    </center>
  )
}

export default App;
