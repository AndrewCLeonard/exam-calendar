import {gql} from "@apollo/client";

export const GET_CLASS = gql `

  mutation addClasst($last_name: String!, $first_name: String!) {
    addClass(ClassName: $ClassName, TeacherName: $TeacherName) {
      _id
      first_name
      last_name
      email
      }
    }
  }
`;

export const ADD_COMMENT = gql`
  mutation addComment($thoughtId: ID!, $commentText: String!) {
    addComment(thoughtId: $thoughtId, commentText: $commentText) {
      _id
      thoughtText
      thoughtAuthor
      createdAt
      comments {
        _id
        commentText
        createdAt
      }
    }
  }
`;
