import List from '../renderData/List';
const DUMMY_DATA = [
  {
    id: "1",
    title: "tehran",
    imgurl:
      "https://upload.wikimedia.org/wikipedia/commons/0/07/North_Tehran_Towers.jpg",
    description:
      "Iran (Persian: ایران‎ Irān [ʔiːˈɾɒːn] (About this soundlisten)), also called Persia,[11] and officially the Islamic Republic of Iran,[a] is a country in Western Asia. It is bordered to the northwest by Armenia and Azerbaijan,[b] to the north by the Caspian Sea, to the northeast by Turkmenistan, to the east by Afghanistan, to the southeast by Pakistan, to the south by the Persian Gulf and the Gulf of Oman, and to the west by Turkey and Iraq. Iran covers an area of 1,648,195 km2 (636,372 sq mi), with a population of 83 million. It is the second-largest country in the Middle East, and its capital and largest city is Tehran.",
  },
  {
    id: "2",
    title: "France",
    imgurl:
      "https://www.bing.com/th?id=OTG.FDE3E130CADEED1EEC85EFE7B53B6816&w=1246&h=400&c=8&rs=1&o=6&pid=TravelL2&eid=G.466950032",
    description:
      "France (French: [fʁɑ̃s] Listen), officially the French Republic (French: République française),[1] is a transcontinental country spanning Western Europe and several overseas regions and territories.[XIII] Its metropolitan area extends from the Rhine to the Atlantic Ocean and from the Mediterranean Sea to the English Channel and the North Sea; overseas territories include French Guiana in South America and several islands in the Atlantic, Pacific and Indian Oceans. France borders Belgium, Luxembourg, and Germany to the northeast, Switzerland, Monaco and Italy to the east, Andorra and Spain to the south, as well as the Netherlands, Suriname, and Brazil in the Americas. Its eighteen integral regions (five of which are overseas) span a combined area of 643,801 km2 (248,573 sq mi) and over 67 million people (as of May 2021).[12] France is a unitary semi-presidential republic with its capital in Paris, the country's largest city and main cultural and commercial centre. Other major urban areas include Lyon, Marseille, Toulouse, Bordeaux, Lille, and Nice. Including its overseas territories, France has twelve time zones, the most of any country.",
  },
  {
    id: "3",
    title: "iran",
    imgurl:"https://www.bing.com/th?id=OTG.DD300A9E631A0D85A78AE9D183C3D4E7&w=1246&h=400&c=8&rs=1&o=6&pid=TravelL2&eid=G.861698700",
    description: "Spain (Spanish: España, [esˈpaɲa] (About this soundlisten)), formally the Kingdom of Spain[13] (Spanish: Reino de España),[a][b] is a country in Southwestern Europe with some pockets of territory in the Mediterranean Sea, offshore in the Atlantic Ocean and across the Strait of Gibraltar.[13] Its continental European territory is situated on the Iberian Peninsula, and its insular territory includes the Balearic Islands in the Mediterranean Sea, several small islands in the Alboran Sea and the Canary Islands in the Atlantic Ocean. The Spanish territory also includes the African semi-exclaves of Ceuta, Melilla and Peñon de Vélez across the Strait of Gibraltar.[14][h] The country's mainland is bordered to the south and east by the Mediterranean Sea; to the north by France, Andorra and the Bay of Biscay; and to the west by Portugal and the Atlantic Ocean.",
  },
];

function Home() {
  return (
        <section>
            <h1>Home</h1>
            <List meetup={DUMMY_DATA}/> 
        </section>
    )
  ;
}

export default Home;
