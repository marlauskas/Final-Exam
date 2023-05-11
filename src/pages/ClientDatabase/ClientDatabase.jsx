import { useState } from "react";
import Button from "../../components/atoms/Button";
import client, { API } from "../../shared/api/api";
import { useQuery } from "@tanstack/react-query";
import RegistrationForm from "../../components/organisms/CreateNewUser/CreateNewUser";
import Modal from "../../components/molecules/Modal/Modal";
import ListItem from "../../components/molecules/ListItem/ListItem";
import {
  StyledPageWrapper,
  Container,
  ListContainerHeader,
  ListContainer,
  Header,
  EmptyDataBase,
} from "./style";

const ClientDatabase = () => {
  const [createNew, setCreateNew] = useState(false);
  const [currentPage] = useState(1);
  const [registerChange, setRegisterChange] = useState(null);

  const openCreate = () => setCreateNew(true);
  const closeCreate = () => {
    setRegisterChange(null);
    setCreateNew(false);
  };

  const { data, refetch } = useQuery({
    queryKey: ["database"],
    queryFn: () => client.get(API.baseUrl.database),
    select: (items) => {
      return items;
    },
  });

  const createDataBase = async (customer) => {
    try {
      await client.post(API.baseUrl.database, customer);
      refetch();
    } catch (error) {
      console.log(error);
    }
  };

  const renderDataBase = () => {
    if (!data?.length) {
      return (
        <EmptyDataBase>
          <td>Currently no records in database</td>
          <td />
          <td />
          <td />
        </EmptyDataBase>
      );
    }
    return data.map((register) => (
      <ListItem
        key={`${register._id} ${Math.random()} `}
        client={register}
        onEdit={(register) => {
          setRegisterChange(register);
          setCreateNew(true);
        }}
      />
    ));
  };

  const updateDataBase = async (customer) => {
    try {
      await client.put(API.baseUrl.database + customer._id, customer);
      refetch();
    } catch (error) {
      console.log(error);
    }
  };

  const deleteDataBase = async (customer) => {
    try {
      await client.delete(API.baseUrl.database + customer._id);
      refetch();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <StyledPageWrapper>
        <Header>
          <Button
            width={"10%"}
            action={openCreate}
            text={"Create new user"}
            type='submit'
          />
        </Header>
        <Container>
          <ListContainer>
            <ListContainerHeader>
              <tr>
                <th>Name & Surname</th>
                <th>Email</th>
                <th>Date</th>
                <th>Action</th>
              </tr>
            </ListContainerHeader>
            <tbody>{renderDataBase()}</tbody>
          </ListContainer>
        </Container>
      </StyledPageWrapper>
      {createNew && (
        <Modal onClose={closeCreate}>
          <RegistrationForm
            closeModal={closeCreate}
            onCreate={createDataBase}
            onUpdate={updateDataBase}
            onDelete={deleteDataBase}
            register={registerChange}
          />
        </Modal>
      )}
    </>
  );
};

export default ClientDatabase;
