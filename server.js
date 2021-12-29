import { ApolloServer, gql } from 'apollo-server';

const typeDefs = gql`
  type Movie {
    title: String
    year: Int
  }

  type Query {
    movies: [Movie]
    movie: Movie
  }
  type Mutation {
    createMovie(title: String!): Boolean
    deleteMovie(title: String!): Boolean
  }
`;
/**
 * String! 은 필드가 non-nullable 임을 의미
 * 즉, 이 필드를 쿼리할 때 GraphQL 서비스가 항상 값을 반환한다는 것을 의미
 * 타입 언어에서는 이것을 느낌표로 표현
**/


const resolvers = {
  Query: {
      movies: () => [],
      movie: () => ({ title: "Hello", year: 2021 }),
    },
    Mutation: { // _ 는 go에서 컴파일러가 무시, root는 가장높은 권한 -> 첫번째 인자를 무시하기 위해서 _ 을 넣음
      createMovie: (_, title) => {
        console.log(title);
        return true;
      },
      deleteMovie: (_, title) => {
        console.log(title);
        return true;
      },
    },
  }

const server = new ApolloServer({
  typeDefs,
  resolvers, 
});
server.listen()
      .then(() => console.log("Server is running on http://localhost:4000/"));