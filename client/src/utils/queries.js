import { gql } from "@apollo/client";
export const GET_QUERY_CLASS= gql `query getclass{
  getclass{
_id
firstname
lastname

  }
}
`;
export const QUERY_SINGLE_CLASS = gql`
  query getSingleCLASS($CLASSId: ID!) {
   Class(ClassId: $ClassId) {
      _id
     ClassName
      TeacherName
      ClassDate
      comments {
        _id
        commentText
        createdAt
      }
    }
  }
`;





