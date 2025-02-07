// src/components/ViewUsers.js

import React from "react";
import "./../../assets/css/viewusers.css";
import { Helmet } from "react-helmet";

const users = [
  {
    id: 1,
    profilePic: "https://via.placeholder.com/50",
    firstName: "Aarav",
    lastName: "Patel",
    email: "aarav.patel@example.com",
    gender: "Male",
    phoneNo: "987-654-3210",
  },
  {
    id: 2,
    profilePic: "https://via.placeholder.com/50",
    firstName: "Aditi",
    lastName: "Sharma",
    email: "aditi.sharma@example.com",
    gender: "Female",
    phoneNo: "876-543-2109",
  },
  {
    id: 3,
    profilePic: "https://via.placeholder.com/50",
    firstName: "Rohan",
    lastName: "Mehta",
    email: "rohan.mehta@example.com",
    gender: "Male",
    phoneNo: "765-432-1098",
  },
  {
    id: 4,
    profilePic: "https://via.placeholder.com/50",
    firstName: "Priya",
    lastName: "Singh",
    email: "priya.singh@example.com",
    gender: "Female",
    phoneNo: "654-321-0987",
  },
  {
    id: 5,
    profilePic: "https://via.placeholder.com/50",
    firstName: "Kabir",
    lastName: "Gupta",
    email: "kabir.gupta@example.com",
    gender: "Male",
    phoneNo: "543-210-9876",
  },
  {
    id: 6,
    profilePic: "https://via.placeholder.com/50",
    firstName: "Sanya",
    lastName: "Reddy",
    email: "sanya.reddy@example.com",
    gender: "Female",
    phoneNo: "432-109-8765",
  },
  {
    id: 7,
    profilePic: "https://via.placeholder.com/50",
    firstName: "Arjun",
    lastName: "Nair",
    email: "arjun.nair@example.com",
    gender: "Male",
    phoneNo: "321-098-7654",
  },
  {
    id: 8,
    profilePic: "https://via.placeholder.com/50",
    firstName: "Ananya",
    lastName: "Pillai",
    email: "ananya.pillai@example.com",
    gender: "Female",
    phoneNo: "210-987-6543",
  },
  {
    id: 9,
    profilePic: "https://via.placeholder.com/50",
    firstName: "Krishna",
    lastName: "Rao",
    email: "krishna.rao@example.com",
    gender: "Male",
    phoneNo: "198-765-4321",
  },
  {
    id: 10,
    profilePic: "https://via.placeholder.com/50",
    firstName: "Meera",
    lastName: "Chopra",
    email: "meera.chopra@example.com",
    gender: "Female",
    phoneNo: "987-654-3212",
  },
  {
    id: 11,
    profilePic: "https://via.placeholder.com/50",
    firstName: "Vikram",
    lastName: "Kapoor",
    email: "vikram.kapoor@example.com",
    gender: "Male",
    phoneNo: "876-543-2108",
  },
  {
    id: 12,
    profilePic: "https://via.placeholder.com/50",
    firstName: "Anjali",
    lastName: "Joshi",
    email: "anjali.joshi@example.com",
    gender: "Female",
    phoneNo: "765-432-1097",
  },
  {
    id: 13,
    profilePic: "https://via.placeholder.com/50",
    firstName: "Sahil",
    lastName: "Deshmukh",
    email: "sahil.deshmukh@example.com",
    gender: "Male",
    phoneNo: "654-321-0985",
  },
  {
    id: 14,
    profilePic: "https://via.placeholder.com/50",
    firstName: "Neha",
    lastName: "Verma",
    email: "neha.verma@example.com",
    gender: "Female",
    phoneNo: "543-210-9874",
  },
  {
    id: 15,
    profilePic: "https://via.placeholder.com/50",
    firstName: "Raj",
    lastName: "Yadav",
    email: "raj.yadav@example.com",
    gender: "Male",
    phoneNo: "432-109-8763",
  },
  {
    id: 16,
    profilePic: "https://via.placeholder.com/50",
    firstName: "Lila",
    lastName: "Wong",
    email: "lila.wong@example.com",
    gender: "Female",
    phoneNo: "789-123-4567",
  },
  {
    id: 17,
    profilePic: "https://via.placeholder.com/50",
    firstName: "Sunil",
    lastName: "Khan",
    email: "sunil.khan@example.com",
    gender: "Male",
    phoneNo: "876-123-9876",
  },
  {
    id: 18,
    profilePic: "https://via.placeholder.com/50",
    firstName: "Mei",
    lastName: "Zhang",
    email: "mei.zhang@example.com",
    gender: "Female",
    phoneNo: "234-567-8910",
  },
  {
    id: 19,
    profilePic: "https://via.placeholder.com/50",
    firstName: "Akira",
    lastName: "Tanaka",
    email: "akira.tanaka@example.com",
    gender: "Male",
    phoneNo: "987-654-3214",
  },
  {
    id: 20,
    profilePic: "https://via.placeholder.com/50",
    firstName: "Sakura",
    lastName: "Yamamoto",
    email: "sakura.yamamoto@example.com",
    gender: "Female",
    phoneNo: "876-543-2106",
  },
  {
    id: 21,
    profilePic: "https://via.placeholder.com/50",
    firstName: "Kiran",
    lastName: "Shah",
    email: "kiran.shah@example.com",
    gender: "Male",
    phoneNo: "123-456-7890",
  },
  {
    id: 22,
    profilePic: "https://via.placeholder.com/50",
    firstName: "Sofia",
    lastName: "Kumar",
    email: "sofia.kumar@example.com",
    gender: "Female",
    phoneNo: "234-567-8901",
  },
  {
    id: 23,
    profilePic: "https://via.placeholder.com/50",
    firstName: "Hiroshi",
    lastName: "Nakamura",
    email: "hiroshi.nakamura@example.com",
    gender: "Male",
    phoneNo: "789-012-3456",
  },
  {
    id: 24,
    profilePic: "https://via.placeholder.com/50",
    firstName: "Yuna",
    lastName: "Kang",
    email: "yuna.kang@example.com",
    gender: "Female",
    phoneNo: "098-765-4321",
  },
  {
    id: 25,
    profilePic: "https://via.placeholder.com/50",
    firstName: "Jin",
    lastName: "Park",
    email: "jin.park@example.com",
    gender: "Male",
    phoneNo: "234-890-1234",
  },
  {
    id: 26,
    profilePic: "https://via.placeholder.com/50",
    firstName: "Sania",
    lastName: "Choudhary",
    email: "sania.choudhary@example.com",
    gender: "Female",
    phoneNo: "987-654-3215",
  },
  {
    id: 27,
    profilePic: "https://via.placeholder.com/50",
    firstName: "Anil",
    lastName: "Aggarwal",
    email: "anil.aggarwal@example.com",
    gender: "Male",
    phoneNo: "654-321-0986",
  },
  {
    id: 28,
    profilePic: "https://via.placeholder.com/50",
    firstName: "Lakshmi",
    lastName: "Iyer",
    email: "lakshmi.iyer@example.com",
    gender: "Female",
    phoneNo: "765-432-1096",
  },
  {
    id: 29,
    profilePic: "https://via.placeholder.com/50",
    firstName: "Ravi",
    lastName: "Nambiar",
    email: "ravi.nambiar@example.com",
    gender: "Male",
    phoneNo: "432-109-8762",
  },
  {
    id: 30,
    profilePic: "https://via.placeholder.com/50",
    firstName: "Fatima",
    lastName: "Khan",
    email: "fatima.khan@example.com",
    gender: "Female",
    phoneNo: "543-210-9873",
  },
];

const ViewUsers = () => {
  return (
    <div className="view-users">
      <Helmet>
        <title>View Users | Admin</title>
      </Helmet>

      <h2>View Users</h2>
      {users.length === 0 ? (
        <p>No users available.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>No.</th>
              <th>Image</th>
              <th>Name</th>
              <th>Email</th>
              <th>Gender</th>
              <th>Phone No.</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user.id}>
                <td>{index + 1}</td>
                <td>
                  <img
                    src={user.profilePic}
                    alt={`${user.firstName} ${user.lastName}`}
                  />
                </td>
                <td>
                  {user.firstName} {user.lastName}
                </td>
                <td>{user.email}</td>
                <td>{user.gender}</td>
                <td>{user.phoneNo}</td>
                <td>
                  <button className="unblock-button">Unblock</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ViewUsers;
