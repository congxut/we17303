import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card, Row, Col, Image, Button } from "antd";

const { Meta } = Card;

const ProductDetailPage = (props) => {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    setProduct(props.products.find((product) => product.id == id));
  }, [id, props.products]);

  return (
    <div
      style={{
        background: "#ECECEC",
        padding: "30px",
      }}
    >
      <Row gutter={[16, 16]}>
        <Col span={12}>
          <Image
            style={{
              width: "300px",
              height: "300px",
            }}
            src={product?.image}
          />
        </Col>
        <Col span={12}>
          <Card>
            <Meta title={product?.name} description={product?.description} />
            <p style={{ marginTop: "16px", color: "red" }}>
              Giá: {product?.price} VND
            </p>

            <Button type="primary">Quất ngay</Button>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default ProductDetailPage;
