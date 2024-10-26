const vote = (user, args) => {
  return `<@${user.id}> has voted!`;
};

module.exports = vote;
