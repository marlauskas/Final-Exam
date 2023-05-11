import React from "react";
import { StyledListItem, ListItemButton } from "./style";

const ListItem = ({ client, onEdit }) => {
  return (
    <StyledListItem>
      <td>{client.name} {client.surname}</td>
      <td> {client.email}</td>
      <td>{`${client.gymStartYear} - ${client.gymEndYear}`}</td>
      <td>
        <ListItemButton onClick={() => onEdit(client)}>Modify</ListItemButton>
      </td>
    </StyledListItem>
  );
};

export default ListItem;
