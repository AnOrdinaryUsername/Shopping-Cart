import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Columns } from './ColumnData';

const FooterColumn = ({ heading, links }: Columns) => {
  return (
    <Column>
      <h3>{heading}</h3>
      {links.map((props, index) => {
        return (
          <Link to={props.route} key={index}>
            {props.name}
          </Link>
        );
      })}
    </Column>
  );
};

export default FooterColumn;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 0.875em;
  padding: 0 2.4rem;

  & > h3 {
    font-weight: 700;
    margin-bottom: 1.4rem;
  }

  & a:not(:last-child) {
    margin-bottom: 0.8rem;
  }
`;
