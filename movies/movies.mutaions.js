import client from "../client";

export default {
  Mutation: {
    // _ 는 go에서 컴파일러가 무시, root는 가장높은 권한 -> 첫번째 인자를 무시하기 위해서 _ 을 넣음
    createMovie: (_, { title, year, genre }) =>
      client.movie.create({
        data: {
          title,
          year,
          genre,
        },
      }),
    deleteMovie: (_, { id }) => client.movie.delete({ where: { id } }),
    updateMovie: (_, { id, year }) =>
      client.movie.update({ where: { id }, data: { year } }),
  },
};
