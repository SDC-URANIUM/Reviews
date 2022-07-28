const pool = require('../db.js');

const example = function() {
  const indexQueryName = "CREATE INDEX IF NOT EXISTS example_name ON example (name)";
  const indexQueryYears = "CREATE INDEX IF NOT EXISTS example_years ON example (years)";
  const indexQueryLanguage = "CREATE INDEX IF NOT EXISTS example_language ON example (language)";

  pool.query(indexQueryName, (error, result) => {
    if (error) console.log(error);
    else console.log(result);
  });
  pool.query(indexQueryYears, (error, result) => {
    if (error) console.log(error);
    else console.log(result);
  });
  pool.query(indexQueryLanguage, (error, result) => {
    if (error) console.log(error);
    else console.log(result);
  });
}

const onReviewsInfo = function() {
  const indexQueryProduct = "CREATE INDEX IF NOT EXISTS reviewsinfo_product ON reviewsinfo (Product)";
  const indexQueryPage = "CREATE INDEX IF NOT EXISTS reviewsinfo_page ON reviewsinfo (page)";
  const indexQueryCount = "CREATE INDEX IF NOT EXISTS reviewsinfo_count ON reviewsinfo (count)";

  pool.query(indexQueryProduct, (error, result) => {
    if (error) console.log(error);
    else console.log(result);
  });
  pool.query(indexQueryPage, (error, result) => {
    if (error) console.log(error);
    else console.log(result);
  });
  pool.query(indexQueryCount, (error, result) => {
    if (error) console.log(error);
    else console.log(result);
  });
}

const onPhotos = function() {
  const indexQueryId = "CREATE INDEX IF NOT EXISTS photos_id ON photos (id)";
  const indexQueryUrl = "CREATE INDEX IF NOT EXISTS photos_url ON photos (url)";

  pool.query(indexQueryId, (error, result) => {
    if (error) console.log(error);
    else console.log(result);
  });
  pool.query(indexQueryUrl, (error, result) => {
    if (error) console.log(error);
    else console.log(result);
  });
}

const onReviews = function() {
  const indexQueryReviewId = "CREATE INDEX IF NOT EXISTS reviews_review_id ON review (review_id)";
  const indexQueryRating = "CREATE INDEX IF NOT EXISTS reviews_rating ON review (rating)";
  const indexQuerySummary = "CREATE INDEX IF NOT EXISTS reviews_summary ON review (summary)";
  const indexQueryRecommend = "CREATE INDEX IF NOT EXISTS reviews_recommend ON review (recommend)";
  const indexQueryResponse = "CREATE INDEX IF NOT EXISTS reviews_response ON review (response)";
  const indexQueryBody = "CREATE INDEX IF NOT EXISTS reviews_body ON review (body)";
  const indexQueryDate = "CREATE INDEX IF NOT EXISTS reviews_date ON review (date)";
  const indexQueryReviewer = "CREATE INDEX IF NOT EXISTS reviews_reviewer_name ON review (reviewer_name)";
  const indexQueryHelpfulness = "CREATE INDEX IF NOT EXISTS reviews_helpfulness ON review (helpfulness)";
  const indexQueryPhotoId = "CREATE INDEX IF NOT EXISTS reviews_photo_id ON review (photo_id)";

  pool.query(indexQueryPhotoId, (error, result) => {
    if (error) console.log(error);
    else console.log(result);
  });
  pool.query(indexQueryDate, (error, result) => {
    if (error) console.log(error);
    else console.log(result);
  });
  pool.query(indexQueryReviewer, (error, result) => {
    if (error) console.log(error);
    else console.log(result);
  });
  pool.query(indexQueryHelpfulness, (error, result) => {
    if (error) console.log(error);
    else console.log(result);
  });

  pool.query(indexQueryRecommend, (error, result) => {
    if (error) console.log(error);
    else console.log(result);
  });
  pool.query(indexQueryResponse, (error, result) => {
    if (error) console.log(error);
    else console.log(result);
  });
  pool.query(indexQueryBody, (error, result) => {
    if (error) console.log(error);
    else console.log(result);
  });

  pool.query(indexQueryReviewId, (error, result) => {
    if (error) console.log(error);
    else console.log(result);
  });
  pool.query(indexQueryRating, (error, result) => {
    if (error) console.log(error);
    else console.log(result);
  });
  pool.query(indexQuerySummary, (error, result) => {
    if (error) console.log(error);
    else console.log(result);
  });
}

const onRatings = function() {
  const indexQueryId = "CREATE INDEX IF NOT EXISTS ratings_id ON ratings (id)";
  const indexQueryOneStar = "CREATE INDEX IF NOT EXISTS ratings_onestar ON ratings (onestar)";
  const indexQueryTwoStar = "CREATE INDEX IF NOT EXISTS ratings_twostar ON ratings (twostar)";
  const indexQueryThreeStar = "CREATE INDEX IF NOT EXISTS ratings_threestar ON ratings (threestar)";
  const indexQueryFourStar = "CREATE INDEX IF NOT EXISTS ratings_fourstar ON ratings (fourstar)";
  const indexQueryFiveStar = "CREATE INDEX IF NOT EXISTS ratings_fivestar ON ratings (fivestar)";

  pool.query(indexQueryOneStar, (error, result) => {
    if (error) console.log(error);
    else console.log(result);
  });
  pool.query(indexQueryThreeStar, (error, result) => {
    if (error) console.log(error);
    else console.log(result);
  });
  pool.query(indexQueryFourStar, (error, result) => {
    if (error) console.log(error);
    else console.log(result);
  });
  pool.query(indexQueryFiveStar, (error, result) => {
    if (error) console.log(error);
    else console.log(result);
  });
  pool.query(indexQueryId, (error, result) => {
    if (error) console.log(error);
    else console.log(result);
  });
  pool.query(indexQueryTwoStar, (error, result) => {
    if (error) console.log(error);
    else console.log(result);
  });
}

const onRecommendations = function() {
  const indexQueryId = "CREATE INDEX IF NOT EXISTS recommendations_id ON recommendations (id)";
  const indexQueryRecommended = "CREATE INDEX IF NOT EXISTS recommendations_recommended ON recommendations (recommended)";
  const indexQueryNotRecommended = "CREATE INDEX IF NOT EXISTS recommendations_notrecommended ON recommendations (notrecommended)";

  pool.query(indexQueryId, (error, result) => {
    if (error) console.log(error);
    else console.log(result);
  });
  pool.query(indexQueryRecommended, (error, result) => {
    if (error) console.log(error);
    else console.log(result);
  });
  pool.query(indexQueryNotRecommended, (error, result) => {
    if (error) console.log(error);
    else console.log(result);
  });
}

const onCharacteristics = function() {
  const indexQueryId = "CREATE INDEX IF NOT EXISTS characteristics_id ON characteristics (id)";
  const indexQueryProductId = "CREATE INDEX IF NOT EXISTS characteristics_product_id ON characteristics (product_id)";
  const indexQueryName = "CREATE INDEX IF NOT EXISTS characteristics_name ON characteristics (name)";

  pool.query(indexQueryId, (error, result) => {
    if (error) console.log(error);
    else console.log(result);
  });
  pool.query(indexQueryProductId, (error, result) => {
    if (error) console.log(error);
    else console.log(result);
  });
  pool.query(indexQueryName, (error, result) => {
    if (error) console.log(error);
    else console.log(result);
  });
}

const onMeta = function() {
  const indexQueryProductId = "CREATE INDEX IF NOT EXISTS meta_product_id ON meta (product_id)";
  const indexQueryRatingsId = "CREATE INDEX IF NOT EXISTS meta_ratings_id ON meta (ratings_id)";
  const indexQueryCharacteristicsId = "CREATE INDEX IF NOT EXISTS meta_characteristics_id ON meta (characteristics_id)";

  pool.query(indexQueryProductId, (error, result) => {
    if (error) console.log(error);
    else console.log(result);
  });
  pool.query(indexQueryRatingsId, (error, result) => {
    if (error) console.log(error);
    else console.log(result);
  });
  pool.query(indexQueryCharacteristicsId, (error, result) => {
    if (error) console.log(error);
    else console.log(result);
  });
}

const onAll = function() {
  example();
  onReviewsInfo();
  onPhotos();
  onReviews();
  onRatings();
  onRecommendations();
  onCharacteristics();
  onMeta();
}



onAll();

module.exports = {
  example
}
