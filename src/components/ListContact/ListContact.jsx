import React from 'react';
import PropTypes from 'prop-types';

import { List, ListItem, Button } from './ListContact.styled';
import { useDispatch } from 'react-redux';
import { removeItem } from '../../reducer/Store';
export const ListContact = ({ contacts }) => {
  const dispatch = useDispatch();
  return (
    <List>
      {console.log(contacts)}
      {contacts.map(contact => {
        return (
          <ListItem key={contact.id}>
            {contact.name}: {contact.number}
            <Button onClick={() => dispatch(removeItem(contact.id))}>
              {' '}
              Delete{' '}
            </Button>
          </ListItem>
        );
      })}
    </List>
  );
};
ListContact.propTypes = {
  contacts: PropTypes.array,
  deleteContact: PropTypes.func,
};
