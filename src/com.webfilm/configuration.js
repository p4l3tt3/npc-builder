module.exports = {
    ip: '108.175.44.128',
    hostname: 'webfilm.com',
    files: {
      internal: {
        'competitor.pdf': buildPdfFile(`Possible Competitor`, `To WebFilm CEO,\nAmadon, a company famous for sending cardboard boxes arround the world, has launched a service very similar to ours.\nIt's called "Amadon Watch" and it is available at watch.amadon.com.\nWe should deffinetely keep an eye on them.\nSincerely,`)
      }
    },
    links: [
      { hostname: 'watch.amadon.com', type: 'internal' },
    ]
  };
