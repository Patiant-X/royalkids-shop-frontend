import { Col, Row } from "react-bootstrap";
import { useGetProductsQuery } from "../slices/productApiSlice";
import Product from "../components/Product";
import Loader from "../components/Loader.jsx";
import Message from "../components/Message.jsx";
import { Link, useParams } from "react-router-dom";
import Meta from "../components/Meta.jsx";
import ProductCarousal from "../components/ProductCarousal.jsx";
import Paginate from "../components/Paginate.jsx";

const HomeScreen = () => {
  const { pageNumber, keyword } = useParams();
  const { data, isLoading, error } = useGetProductsQuery({
    keyword,
    pageNumber,
  });

  return (
    <>
      {!keyword ? (
        <ProductCarousal />
      ) : (
        <Link to="/" className="btn btn-light mb-4">
          Go Back
        </Link>
      )}
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">
          {error?.data?.message || error.error}
        </Message>
      ) : (
        <>
          <Meta />
          <h1>Latest Product</h1>
          <Row>
            {data.products.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
          <Paginate
            page={data.page}
            pages={data.pages}
            keyword={keyword ? keyword : ""}
          />
        </>
      )}
    </>
  );
};

export default HomeScreen;
