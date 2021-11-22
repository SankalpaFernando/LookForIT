import React,{useState,useEffect} from "react";
import { Input, Icon, Button, Row, Col, Div } from "atomize";
import { getNewBooks, searchBooks } from "../data/actions";
import { useRecoilState } from "recoil";
import { bookState,loadingState } from "../data/recoil";

function SearchBar() {
  const [books,setBooks] = useRecoilState(bookState);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useRecoilState(loadingState);
  const onSearch =(value)=>{
    setQuery(value)
  }
  useEffect(async()=>{
    setLoading(true)
    if(query==""){
      setBooks(await getNewBooks());
    }else{
      setBooks(await searchBooks(query))
    }
    setLoading(false)
  },[query])
  return (
    <Row m={{y:"2rem"}}>
      <Col size={{ xs: 12, lg: 4 }}/>
      <Col size={{ xs: 12, lg: 4}}>
        <Input
          placeholder="Author/ISBN/Title"
          h="3rem"
          onChange={(e)=>onSearch(e.target.value)}
          suffix={
            <Button
              pos="absolute"
              bg="transparent"
              w="3rem"
              h="3rem"
              top="0"
              right="0"
              rounded={{ r: "md" }}
              onClick={()=>onSearch(query)}
            >
              <Icon name="Search" size="20px" color="black" cursor="pointer" />
            </Button>
          }
        />
      </Col>
      <Col size={{ xs: 12, lg: 4 }}/>
    </Row>
  );
}

export default SearchBar;
