import React, { useReducer, useState } from "react";
import { Button, Form, Container, Row, Col, ListGroup, InputGroup } from "react-bootstrap";

function listReducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM":
      return { ...state, items: [...state.items, action.item] };
    case "REMOVE_ITEM":
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.id),
      };
    case "EDIT_ITEM":
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.id ? { ...item, name: action.newName } : item
        ),
      };
    case "SET_ITEMS":
      return {
        ...state,
        items: action.items,
      };
    default:
      return state;
  }
}

const initialState = {
  items: [],
};

function ItemList() {
  const [state, dispatch] = useReducer(listReducer, initialState);
  const [newItemName, setNewItemName] = useState("");
  const [editId, setEditId] = useState(null);
  const [editValue, setEditValue] = useState("");
  const [sortType, setSortType] = useState("created");
  const [filter, setFilter] = useState("");

  // Thêm một mục mới vào danh sách
  const handleAddItem = () => {
    if (newItemName) {
      const newItem = { id: Date.now(), name: newItemName, created: Date.now() };
      dispatch({ type: "ADD_ITEM", item: newItem });
      setNewItemName("");
    }
  };

  // Xóa một mục khỏi danh sách
  const handleRemoveItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", id });
  };

  // Bắt đầu chỉnh sửa
  const handleEditStart = (id, name) => {
    setEditId(id);
    setEditValue(name);
  };

  // Lưu chỉnh sửa
  const handleEditSave = (id) => {
    if (editValue.trim()) {
      dispatch({ type: "EDIT_ITEM", id, newName: editValue });
      setEditId(null);
      setEditValue("");
    }
  };

  // Hủy chỉnh sửa
  const handleEditCancel = () => {
    setEditId(null);
    setEditValue("");
  };

  // Sắp xếp danh sách
  const handleSort = (type) => {
    setSortType(type);
    let sortedItems = [...state.items];
    if (type === "alphabetical") {
      sortedItems.sort((a, b) => a.name.localeCompare(b.name));
    } else if (type === "created") {
      sortedItems.sort((a, b) => a.created - b.created);
    }
    dispatch({ type: "SET_ITEMS", items: sortedItems });
  };

  // Lọc danh sách
  const filteredItems = state.items.filter((item) =>
    item.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <Container className="mt-4">
      <Row>
        <Col md={6} className="offset-md-3">
          <Form
            onSubmit={(e) => {
              e.preventDefault();
              handleAddItem();
            }}
          >
            <Form.Group controlId="formItem">
              <Form.Label>Enter Item:</Form.Label>
              <Form.Control
                type="text"
                value={newItemName}
                onChange={(e) => setNewItemName(e.target.value)}
                placeholder="Enter item name"
              />
            </Form.Group>
            <Button variant="primary" onClick={handleAddItem} className="mt-2">
              Add Item
            </Button>
          </Form>

          {/* Filter & Sort */}
          <InputGroup className="mt-3 mb-2">
            <Form.Control
              placeholder="Filter items..."
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            />
            <Button
              variant={sortType === "alphabetical" ? "secondary" : "outline-secondary"}
              onClick={() => handleSort("alphabetical")}
            >
              Sort A-Z
            </Button>
            <Button
              variant={sortType === "created" ? "secondary" : "outline-secondary"}
              onClick={() => handleSort("created")}
            >
              Sort by Time
            </Button>
          </InputGroup>

          <h3 className="mt-4">Item List:</h3>
          <ListGroup>
            {filteredItems.map((item) => (
              <ListGroup.Item
                key={item.id}
                className="d-flex justify-content-between align-items-center"
              >
                {editId === item.id ? (
                  <>
                    <Form.Control
                      type="text"
                      value={editValue}
                      onChange={(e) => setEditValue(e.target.value)}
                      className="me-2"
                      style={{ maxWidth: 200, display: "inline-block" }}
                    />
                    <Button
                      variant="success"
                      size="sm"
                      onClick={() => handleEditSave(item.id)}
                      className="me-1"
                    >
                      Save
                    </Button>
                    <Button
                      variant="secondary"
                      size="sm"
                      onClick={handleEditCancel}
                    >
                      Cancel
                    </Button>
                  </>
                ) : (
                  <>
                    <span>{item.name}</span>
                    <div>
                      <Button
                        variant="warning"
                        size="sm"
                        onClick={() => handleEditStart(item.id, item.name)}
                        className="me-1"
                      >
                        Edit
                      </Button>
                      <Button
                        variant="danger"
                        size="sm"
                        onClick={() => handleRemoveItem(item.id)}
                      >
                        Remove
                      </Button>
                    </div>
                  </>
                )}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
}

export default ItemList;
