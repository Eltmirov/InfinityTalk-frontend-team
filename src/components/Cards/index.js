import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadUsers } from "../../redux/features/User";
import CardsItem from "./CardsItem";

const Cards = () => {
  const dispatch = useDispatch();

  const users = useSelector((state) => state.user.userList);
  const mainUser = useSelector((state) => state.userProfile.user);

  useEffect(() => {
    dispatch(loadUsers());
  }, [dispatch]);

  return (
    <div>
      {users.map((user) => {
        return (
          <CardsItem key={user._id}
                     img={user.img}
                     name={user.name}
                     description={user.description}
                     whatsapp={user.whatsapp}
                     instagram={user.instagram}
                     telegram={user.telegram}
                     mainUser={mainUser}
                     id={user._id}
          />
        );
      })}
    </div>
  );
};

export default Cards;
