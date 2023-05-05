export default async function handler(req, res) {
  let data = await (
    await fetch(`https://api.github.com/users/UnspecifiedOne/followers`, {
      method: "GET",
      headers: {
        Authorization: `${process.env.GITHUB_TOKEN} `,
      },
    })
  ).json();

  res.status(200).json(data);
}
