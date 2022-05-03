import React from 'react'
import {Container, Row,Col} from 'react-bootstrap'
import { LeftSideBar } from './LeftSideBar';
import './Dashboard.css'
export const Dashboard = ({children}) => {
  return (
    <div className = 'isDashBoardSection'>
      <Row>
        <Col lg={2}>
        <LeftSideBar/>
        </Col>
      </Row>
      <Row>
        <Col>
        Hello </Col>

        <Col>
        Hello </Col>
      </Row>

    </div>
  )
}
