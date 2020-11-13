import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const Searchbox = () => {

    const [searchTerm, setSearchTerm] = useState('')
    return (
        <Form onSubmit={submitHandler} inline>
            <Form.Control type="text" name="q" onChange={(e) => setSearchTerm(e,target.value)} placeholder="Search Products..." className="mr-sm-2 ml-sm5"></Form.Control>
            <Button type="submit" variant="outline-primary" className="p-2">Search</Button>
            
        </Form>
    )
}

export default Searchbox
