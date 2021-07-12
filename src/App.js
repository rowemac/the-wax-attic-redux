import logo from './logo.svg';
import './App.css';

function App() {
  
  const albums = [
    {title: "Bon Iver", artist: "Bon Iver", year: 2011, condition: "Good", length: "39:25", genre: "Post-rock", label: "Jagjaguwar", single: "Calgary", image: "https://images-na.ssl-images-amazon.com/images/I/71ravrwq6dL._SL1200_.jpg" },
    {title: "For Emma, Forever Ago", artist: "Bon Iver", year: 2007, condition: "Good", length: "37:14", genre: "Indie folk", label: "Jagjaguwar", single: "Skinny Love", image: "https://images-na.ssl-images-amazon.com/images/I/518ywjXFavL.jpg" },
    {title: "Apocalypse", artist: "Bill Callahan", year: 2011, condition: "Good", length: "40:24", genre: "Contemporary folk", label: "Drag City", single: "N/A", image: "https://images-na.ssl-images-amazon.com/images/I/91sDiJOydCL._SL1500_.jpg" },
    {title: "Bitter Tears", artist: "Johnny Cash", year: 1964, condition: "Fair", length: "31:13", genre: "Country", label: "Columbia", single: "The Ballad of Ira Hayes", image: "https://images-na.ssl-images-amazon.com/images/I/71rewQTurQL._SL1500_.jpg" },
    {title: "The Rambler", artist: "Johnny Cash", year: 1977, condition: "Fair", length: "37:28", genre: "Country", label: "Columbia", single: "N/A", image: "https://images-na.ssl-images-amazon.com/images/I/91bepNXUKQL._SL1500_.jpg" },
    {title: "Patsy Cline's Greatest Hits", artist: "Patsy Cline", year: 1967, condition: "Fair", length: "32:36", genre: "Country", label: "Decca", single: "N/A", image: "https://images-na.ssl-images-amazon.com/images/I/91EHEDj5PRL._SL1500_.jpg" },
    {title: "Songs of Love and Hate", artist: "Leonard Cohen", year: 1971, condition: "Good", length: "44:21", genre: "Contemporary folk", label: "Columbia", single: "N/A", image: "https://images-na.ssl-images-amazon.com/images/I/71Bw8tUyC5L._SL1426_.jpg" },
    {title: "4 Way Street", artist: "Crosby, Stills, Nash & Young", year: 1971, condition: "Fair", length: "85:59", genre: "Rock", label: "Atlantic", single: "N/A", image: "https://images-na.ssl-images-amazon.com/images/I/81n4hBljrvL._SL1500_.jpg" },
    {title: "Bob Dylan", artist: "Bob Dylan", year: 1962, condition: "Fair", length: "36:54", genre: "Folk", label: "Columbia", single: "N/A", image: "https://images-na.ssl-images-amazon.com/images/I/71TG8mYKLgL._SL1200_.jpg" },
    {title: "Blood on the Tracks", artist: "Bob Dylan", year: 1975, condition: "Fair", length: "51:42", genre: "Folk rock", label: "Columbia", single: "Tangled Up in Blue", image: "https://images-na.ssl-images-amazon.com/images/I/913aFDI0sRL._SL1500_.jpg" },
    {title: "Bringing It All Back Home", artist: "Bob Dylan", year: 1965, condition: "Good", length: "47:21", genre: "Folk rock", label: "Columbia", single: "Subterranean Homesick Blues", image: "https://images-na.ssl-images-amazon.com/images/I/61sYBPPptxL._SL1200_.jpg" },
    {title: "Desire", artist: "Bob Dylan", year: 1976, condition: "Poor", length: "56:13", genre: "Folk rock", label: "Columbia", single: "Hurricane", image: "https://images-na.ssl-images-amazon.com/images/I/71trczxP4EL._SL1200_.jpg" },
    {title: "The Freewheelin' Bob Dylan", artist: "Bob Dylan", year: 1963, condition: "Fair", length: "50:04", genre: "Folk", label: "Columbia", single: "Blowin' in the Wind", image: "https://images-na.ssl-images-amazon.com/images/I/81SCHwHDU%2BL._SL1500_.jpg" },
    {title: "Hard Rain", artist: "Bob Dylan", year: 1976, condition: "Fair", length: "51:06", genre: "Rock", label: "Columbia", single: "N/A", image: "https://images-na.ssl-images-amazon.com/images/I/81IguOD%2B-gL._SL1500_.jpg" },
    {title: "Highway 61 Revisited", artist: "Bob Dylan", year: 1965, condition: "Good", length: "51:26", genre: "Folk rock", label: "Columbia", single: "Like a Rolling Stone", image: "https://images-na.ssl-images-amazon.com/images/I/51XKSleIUvL.jpg" },
    {title: "Nashville Skyline", artist: "Bob Dylan", year: 1969, condition: "Fair", length: "27:14", genre: "Country rock", label: "Columbia", single: "Lay Lady Lay", image: "https://images-na.ssl-images-amazon.com/images/I/81h%2B9si7veL._SL1500_.jpg" },
    {title: "The Times They Are a-Changin'", artist: "Bob Dylan", year: 1964, condition: "Fair", length: "45:36", genre: "Folk", label: "Columbia", single: "The Times They Are a-Changin'", image: "https://images-na.ssl-images-amazon.com/images/I/61O1oVwSuyL._SL1200_.jpg" },
    {title: "Rumours", artist: "Fleetwood Mac", year: 1977, condition: "Fair", length: "51:26", genre: "Pop rock", label: "Warner Bros.", single: "Go Your Own Way", image: "https://images-na.ssl-images-amazon.com/images/I/71HWqbh0BLL._SL1425_.jpg" },
    {title: "So", artist: "Peter Gabriel", year: 1986, condition: "Fair", length: "41:56", genre: "Pop", label: "Charisma", single: "In Your Eyes", image: "https://images-na.ssl-images-amazon.com/images/I/719ORAEe2XL._SL1400_.jpg" },
    {title: "American Slang", artist: "The Gaslight Anthem", year: 2010, condition: "Good", length: "34:14", genre: "Heartland rock", label: "SideOneDummy", single: "N/A", image: "https://images-na.ssl-images-amazon.com/images/I/81Fsbbn53KL._SL1500_.jpg" },
    {title: "The '59 Sound", artist: "The Gaslight Anthem", year: 2008, condition: "Good", length: "41:32", genre: "Heartland rock", label: "SideOneDummy", single: "N/A", image: "https://images-na.ssl-images-amazon.com/images/I/814HrguiiCL._SL1200_.jpg" },
    {title: "Led Zeppelin IV", artist: "Led Zeppelin", year: 1971, condition: "Fair", length: "42:34", genre: "Hard rock", label: "Atlantic", single: "Black Dog", image: "https://images-na.ssl-images-amazon.com/images/I/81yf0WsEsWL._SL1425_.jpg" },
    {title: "I Am Easy to Find", artist: "The National", year: 2019, condition: "Good", length: "63:35", genre: "Indie rock", label: "4AD", single: "You Had Your Soul with You", image: "https://images-na.ssl-images-amazon.com/images/I/61IhBVKRPKL._SL1000_.jpg" },
    {title: "Trouble Will Find Me", artist: "The National", year: 2013, condition: "Good", length: "55:06", genre: "Indie rock", label: "4AD", single: "Demons", image: "https://images-na.ssl-images-amazon.com/images/I/71iNZRC571L._SL1200_.jpg" },
    {title: "John Prine", artist: "John Prine", year: 1971, condition: "Fair", length: "44:07", genre: "Folk", label: "Atlantic", single: "N/A", image: "https://images-na.ssl-images-amazon.com/images/I/81O7LCL5ysL._SL1200_.jpg" },
    {title: "Nation of Heat", artist: "Joe Pug", year: 2009, condition: "Good", length: "24:00", genre: "Folk", label: "N/A", single: "N/A", image: "https://images-na.ssl-images-amazon.com/images/I/61rKHyb1S7L._SL1000_.jpg" },
    {title: "Night Moves", artist: "Bob Seger & the Silver Bullet Band", year: 1976, condition: "Fair", length: "36:50", genre: "Heartland rock", label: "Capitol", single: "Night Moves", image: "https://images-na.ssl-images-amazon.com/images/I/91Ii0L%2BYcbL._SL1500_.jpg" },
    {title: "I Don't Want to Go Home", artist: "Southside Johnny and the Asbury Jukes", year: 1976, condition: "Fair", length: "35:00", genre: "Rock", label: "Epic", single: "I Don't Want to Go Home", image: "https://images-na.ssl-images-amazon.com/images/I/51%2B2JZ0xy2L.jpg" },
    {title: "Born to Run", artist: "Bruce Springsteen", year: 1975, condition: "Fair", length: "39:23", genre: "Rock and roll", label: "Columbia", single: "Born to Run", image: "https://images-na.ssl-images-amazon.com/images/I/71e6E6wDe2L._SL1500_.jpg" },
    {title: "Darkness on the Edge of Town", artist: "Bruce Springsteen", year: 1978, condition: "Fair", length: "42:55", genre: "Heartland rock", label: "Columbia", single: "Prove It All Night", image: "https://images-na.ssl-images-amazon.com/images/I/71W%2Bw0JP4VL._SL1500_.jpg" },
    {title: "Greetings from Asbury Park, N.J.", artist: "Bruce Springsteen", year: 1973, condition: "Fair", length: "37:08", genre: "Rock", label: "Columbia", single: "Blinded by the Light", image: "https://images-na.ssl-images-amazon.com/images/I/81voYQs8%2BwL._SL1500_.jpg" },
    {title: "Nebraska", artist: "Bruce Springsteen", year: 1982, condition: "Fair", length: "40:50", genre: "Folk", label: "Columbia", single: "Atlantic City", image: "https://images-na.ssl-images-amazon.com/images/I/818m5IgAcrL._SL1500_.jpg" },
    {title: "The River", artist: "Bruce Springsteen", year: 1980, condition: "Fair", length: "83:47", genre: "Heartland rock", label: "Columbia", single: "Hungry Heart", image: "https://images-na.ssl-images-amazon.com/images/I/71Bf2CMCcDL._SL1500_.jpg" },
    {title: "Tunnel of Love", artist: "Bruce Springsteen", year: 1987, condition: "Fair", length: "46:25", genre: "Pop rock", label: "Columbia", single: "Brilliant Disguise", image: "https://images-na.ssl-images-amazon.com/images/I/71Dahuh4eoL._SL1500_.jpg" },
    {title: "The Wild, the Innocent & the E Street Shuffle", artist: "Bruce Springsteen", year: 1973, condition: "Fair", length: "46:47", genre: "Rock and roll", label: "Columbia", single: "4th of July, Asbury Park (Sandy)", image: "https://images-na.ssl-images-amazon.com/images/I/711o02FrgcL._SL1500_.jpg" },
    {title: "Long May You Run", artist: "The Stills-Young Band", year: 1976, condition: "Fair", length: "39:10", genre: "Rock", label: "Reprise", single: "N/A", image: "https://images-na.ssl-images-amazon.com/images/I/81JXXWdqazL._SL1425_.jpg" },
    {title: "Stop Making Sense", artist: "Talking Heads", year: 1984, condition: "Fair", length: "39:37", genre: "New wave", label: "Sire", single: "Once in a Lifetime", image: "https://images-na.ssl-images-amazon.com/images/I/81XRjl0ftaL._SL1500_.jpg" },
    {title: "Little Creatures", artist: "Talking Heads", year: 1985, condition: "Fair", length: "38:38", genre: "New wave", label: "Sire", single: "Road to Nowhere", image: "https://images-na.ssl-images-amazon.com/images/I/81i2w0ceuqL._SL1425_.jpg" },
    {title: "Dark Bird Is Home", artist: "The Tallest Man on Earth", year: 2015, condition: "Good", length: "41:53", genre: "Folk", label: "Dead Oceans", single: "Sagres", image: "https://images-na.ssl-images-amazon.com/images/I/A1q1rrYqoDL._SL1500_.jpg" },
    {title: "Shallow Grave", artist: "The Tallest Man on Earth", year: 2008, condition: "Good", length: "30:25", genre: "Folk", label: "Gravitation", single: "N/A", image: "https://images-na.ssl-images-amazon.com/images/I/615BcqJaBcL._SL1200_.jpg" },
    {title: "Sometimes the Blues Is Just a Passing Bird", artist: "The Tallest Man on Earth", year: 2010, condition: "Good", length: "17:20", genre: "Folk", label: "Dead Oceans", single: "N/A", image: "https://images-na.ssl-images-amazon.com/images/I/51vf-FmVixL.jpg" },
    {title: "The Tallest Man on Earth", artist: "The Tallest Man on Earth", year: 2006, condition: "Good", length: "15:46", genre: "Folk", label: "Gravitation", single: "N/A", image: "https://images-na.ssl-images-amazon.com/images/I/71rXPEsgv8L._SL1200_.jpg" },
    {title: "There's No Leaving Now", artist: "The Tallest Man on Earth", year: 2012, condition: "Good", length: "38:57", genre: "Folk", label: "Dead Oceans", single: "1904", image: "https://images-na.ssl-images-amazon.com/images/I/61HhDy%2Bbi8L._SL1200_.jpg" },
    {title: "The Wild Hunt", artist: "The Tallest Man on Earth", year: 2010, condition: "Good", length: "34:38", genre: "Folk", label: "Dead Oceans", single: "N/A", image: "https://images-na.ssl-images-amazon.com/images/I/91VNoX0DwNL._SL1500_.jpg" },
    {title: "The Joshua Tree", artist: "U2", year: 1987, condition: "Fair", length: "50:11", genre: "Rock", label: "Island", single: "With or Without You", image: "https://images-na.ssl-images-amazon.com/images/I/61cWZs9qZ2L._SL1200_.jpg" },
    {title: "The Unforgettable Fire", artist: "U2", year: 1984, condition: "Fair", length: "42:38", genre: "Art rock", label: "Island", single: "Pride (In the Name of Love)", image: "https://images-na.ssl-images-amazon.com/images/I/711vwl-YKGL._SL1200_.jpg" },
    {title: "Mule Variations", artist: "Tom Waits", year: 1999, condition: "Good", length: "70:33", genre: "Rock", label: "ANTI-", single: "Hold On", image: "https://images-na.ssl-images-amazon.com/images/I/71cjmqq8c2L._SL1425_.jpg" },
    {title: "Swordfishtrombones", artist: "Tom Waits", year: 1983, condition: "Good", length: "41:41", genre: "Experimental rock", label: "Island", single: "In the Neighborhood", image: "https://images-na.ssl-images-amazon.com/images/I/71Ao3Dn4LlL._SL1200_.jpg" },
    {title: "A Deeper Understanding", artist: "The War on Drugs", year: 2017, condition: "Good", length: "66:13", genre: "Heartland rock", label: "Atlantic", single: "Thinking of a Place", image: "https://images-na.ssl-images-amazon.com/images/I/81BNgrizByL._SL1500_.jpg" },
    {title: "Lost in the Dream", artist: "The War on Drugs", year: 2014, condition: "Good", length: "60:27", genre: "Indie rock", label: "Secretly Canadian", single: "Red Eyes", image: "https://images-na.ssl-images-amazon.com/images/I/812VIRKui8L._SL1425_.jpg" },
    {title: "The Kids Are Alright", artist: "The Who", year: 1979, condition: "Fair", length: "79:35", genre: "Rock", label: "Polydor", single: "N/A", image: "https://images-na.ssl-images-amazon.com/images/I/81zwfrstzaL._SL1400_.jpg" },
    {title: "Tramp", artist: "Sharon Van Etten", year: 2012, condition: "Good", length: "46:19", genre: "Indie folk", label: "Jagjaguwar", single: "Serpents", image: "https://images-na.ssl-images-amazon.com/images/I/61Aj0kyUaoL._SL1200_.jpg" },
    {title: "Townes Van Zandt", artist: "Townes Van Zandt", year: 1969, condition: "Good", length: "33:59", genre: "Country", label: "Poppy", single: "N/A", image: "https://images-na.ssl-images-amazon.com/images/I/91daci1BbmL._SL1500_.jpg" },
    {title: "Inland", artist: "Leif Vollebekk", year: 2010, condition: "Good", length: "38:00", genre: "Indie folk", label: "N/A", single: "N/A", image: "https://images-na.ssl-images-amazon.com/images/I/81m5j0V3gnL._SL1500_.jpg" },
    {title: "New Ways", artist: "Leif Vollebekk", year: 2019, condition: "Good", length: "41:00", genre: "Indie folk", label: "Secret City Records", single: "Hot Tears", image: "https://images-na.ssl-images-amazon.com/images/I/711vc1B7amL._SL1200_.jpg" },
    {title: "North Americana", artist: "Leif Vollebekk", year: 2014, condition: "Good", length: "41:00", genre: "Indie folk", label: "Missing Piece Group", single: "N/A", image: "https://images-na.ssl-images-amazon.com/images/I/81lK7ZTVWWL._SL1500_.jpg" },
    {title: "Twin Solitude", artist: "Leif Vollebekk", year: 2017, condition: "Good", length: "51:00", genre: "Indie folk", label: "Secret City Records", single: "Elegy", image: "https://images-na.ssl-images-amazon.com/images/I/71A6v61aR8L._SL1200_.jpg" },
    {title: "Harvest", artist: "Neil Young", year: 1972, condition: "Fair", length: "37:10", genre: "Folk rock", label: "Reprise", single: "Heart of Gold", image: "https://images-na.ssl-images-amazon.com/images/I/91kU8UOq4TL._SL1380_.jpg" },
    {title: "Live Rust", artist: "Neil Young and Crazy Horse", year: 1979, condition: "Fair", length: "73:47", genre: "Hard rock", label: "Reprise", single: "N/A", image: "https://images-na.ssl-images-amazon.com/images/I/81TAEWkEowL._SL1425_.jpg" }
  ]
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
