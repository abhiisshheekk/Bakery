import './App.css';
import CollectionCard from './components/CollectionCard';
import Header from './components/Header';
import storeItems from './data.json';
import { Container, Row, Col } from 'react-bootstrap';
import { ShoppingCartProvider } from './Utility/ShoppingCart';

function App() {
	return (
		<ShoppingCartProvider>
			<Container className="mb-4">
				<Header />
				<h1 style={{ textAlign: "center", marginTop: "10px" }}>Our Delicious Products</h1>
				<Row md={2} xs={1} lg={3} xl={4}>
					{storeItems.map(item => (
						<Col><CollectionCard id={item.id} name={item.name} desc={item.description} image={item.imgUrl} price={item.price} /></Col>
					))}
				</Row>
			</Container>
		</ShoppingCartProvider>
	);
}

export default App;
