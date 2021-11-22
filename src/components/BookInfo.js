import React from "react";
import { Text, Button,Icon,Row,Col } from "atomize";
function BookInfo({title,authors,isbn10,pages,image,price,desc,year}) {
  return (
    <Row>
      <Col>
        <img src={`${image}`} />
      </Col>
      <Col>
        <Text textAlign="center" textSize="display1">{title}</Text>
        <Text m="1rem" textAlign="justify" textColor="black200">{desc}</Text>
        <table style={{ width: "90%", margin: "0 auto" }}>
          <tr>
            <td>
              <Text textWeight="600">ISBN</Text>
            </td>
            <td>
              <Text textWeight="300">{isbn10}</Text>
            </td>
          </tr>
          <tr>
            <td>
              <Text textWeight="600">Author(s)</Text>
            </td>
            <td>
              <Text textWeight="300">{authors}</Text>
            </td>
          </tr>
          <tr>
            <td>
              <Text textWeight="600">Published Year</Text>
            </td>
            <td>
              <Text textWeight="300">{year}</Text>
            </td>
          </tr>
          <tr>
            <td>
              <Text textWeight="600">Pages</Text>
            </td>
            <td>
              <Text textWeight="300">{pages}</Text>
            </td>
          </tr>
        </table>
        <div style={{marginTop:"1rem",display:"flex",float:"right"}}>
          <Button
            prefix={
              <Icon
                name="Bag"
                size="16px"
                color="white"
                m={{ r: "0.5rem" }}
              />
            }
            bg="success700"
            hoverBg="success800"
            rounded="circle"
            p={{ r: "1.5rem", l: "1rem" }}
            shadow="3"
            hoverShadow="4"
            onClick={() => {
                window.open(`https://www.amazon.com/s?k=${isbn10}`);
            }}
          >
            Buy Now
          </Button>
        </div>
      </Col>
    </Row>
  );
}

export default BookInfo;
