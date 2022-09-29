const { myDataSource } = require("../utils/dataSource");

const accomodationCategory = async (
  id,
  reserve,
  grade,
  facility,
  persons,
  bed_type,
  sort
) => {
  console.log("accomodationCategory Dao");
  console.log(id);
  const accomodationCategory = await myDataSource.query(
    `
    SELECT
      accomodations.id as id,
      grades.name as rating,
      accomodations.name as name,
      accomodations.thumbnail_image as img,
      score,
      review,
      accomodations.latitude as lat,
      accomodations.longitude as lng,
      price,
      saleprice

    FROM accomodations

    LEFT JOIN
      hotel_cottage_camping_hanok_filters ON accomodations.id = hotel_cottage_camping_hanok_filters.accomodation_id
    LEFT JOIN
      grades ON hotel_cottage_camping_hanok_filters.grade_id = grades.id
    LEFT JOIN 
      accomodation_locations ON accomodations.location_id = accomodation_locations.id

    INNER JOIN (
      SELECT
        accomodation_id,
        round(avg(rating),1) as score,
        count(id) as review
      FROM reviews
      WHERE accomodation_id = accomodation_id
      GROUP BY accomodation_id )
      AS reviewData ON accomodations.id = reviewData.accomodation_id

    INNER JOIN (
      SELECT 
        availability_promotion_filters.accomodation_id,
        JSON_ARRAYAGG(reserve_id) AS reserve
      FROM availability_promotion_filters
        LEFT JOIN reserves ON availability_promotion_filters.reserve_id = reserves.id
        WHERE 1=1 AND ((("null" IN (?))AND(reserve_id=reserve_id))OR(reserve_id IN (?)))        
        GROUP BY availability_promotion_filters.accomodation_id ) 
      AS reserve ON accomodations.id = reserve.accomodation_id
  
    INNER JOIN (
      SELECT 
        hotel_cottage_camping_hanok_filters.accomodation_id,
        JSON_ARRAYAGG(grade_id) AS grade
      FROM hotel_cottage_camping_hanok_filters
        LEFT JOIN grades ON hotel_cottage_camping_hanok_filters.grade_id = grades.id
        WHERE 1=1 AND ((("null" IN (?))AND(grade_id=grade_id))OR(grade_id IN (?)))
        GROUP BY hotel_cottage_camping_hanok_filters.accomodation_id ) 
      AS grade ON accomodations.id = grade.accomodation_id

    INNER JOIN (
      SELECT 
        accomodation_facilities.accomodation_id,
        JSON_ARRAYAGG(facility_id) AS facility
      FROM accomodation_facilities
        LEFT JOIN facilities ON accomodation_facilities.facility_id = facilities.id
        WHERE 1=1 AND ((("null" IN (?))AND(facility_id=facility_id))OR(facility_id IN (?)))
        GROUP BY accomodation_facilities.accomodation_id ) 
      AS facility ON accomodations.id = facility.accomodation_id

    INNER JOIN (
      SELECT
        accomodation_rooms.accomodation_id, 
        MIN(accomodation_rooms.capacity) AS capacity,
        MIN(accomodation_rooms.original_price) AS price,
        MIN(room_availability_checks.remain) AS remain,
        MIN(accomodation_rooms.sale_price) AS saleprice
      FROM accomodation_rooms
        LEFT JOIN 
          room_availability_checks ON accomodation_rooms.id = room_availability_checks.room_id
        WHERE 1=1 AND ((("null" IN (?))AND(capacity=capacity))OR(capacity >= (?)))
        GROUP BY accomodation_rooms.accomodation_id )
      AS rooms ON accomodations.id = rooms.accomodation_id

    LEFT JOIN (
      SELECT
        accomodation_rooms.accomodation_id,
        JSON_ARRAYAGG(room_bed_numbers.room_id) AS room_id, 
        JSON_ARRAYAGG(room_bed_numbers.bed_type_id) AS bed_type
      FROM accomodation_rooms
        LEFT JOIN
          room_bed_numbers ON accomodation_rooms.id = room_bed_numbers.room_id
        WHERE 1=1 AND ((("null" IN (?))AND(bed_type_id=bed_type_id))OR(bed_type_id IN(?))) 
        GROUP BY accomodation_rooms.accomodation_id )
      AS bed_type ON accomodations.id = bed_type.accomodation_id
    
   
  WHERE category_id = ?


    ORDER BY 
    CASE ?
      WHEN "highprice" then saleprice
      WHEN "score" then score END desc,
    CASE ?
      WHEN "lowprice" then saleprice END asc
    `,
    [
      reserve,
      reserve,
      grade,
      grade,
      facility,
      facility,
      persons,
      persons,
      bed_type,
      bed_type,
      id,
      sort,
      sort,
    ]
  );
  return accomodationCategory;
};

const accomodationFilter = async (
  accno,
  reserve,
  grade,
  facility,
  persons,
  bed_type,
  sort,
  date1,
  date2
) => {
  console.log("accomodationFilter Dao");
  const accomodationFilter = await myDataSource.query(
    `
    SELECT 
      accomodations.id, 
      grades.name as rating,
      accomodations.name,
      accomodations.thumbnail_image as img, 
      score,
      review,
      accomodation_locations.name as region,
      accomodations.latitude as lat,
      accomodations.longitude as lng,
      price as price,
      saleprice as saleprice

    FROM
      accomodations
    
    LEFT JOIN
      hotel_cottage_camping_hanok_filters ON accomodations.id = hotel_cottage_camping_hanok_filters.accomodation_id
    LEFT JOIN
      grades ON hotel_cottage_camping_hanok_filters.grade_id = grades.id
    LEFT JOIN 
      accomodation_locations ON accomodations.location_id = accomodation_locations.id

    INNER JOIN (
      SELECT
        accomodation_id,
        round(avg(rating),1) as score,
        count(id) as review
      FROM reviews
      WHERE accomodation_id = accomodation_id
      GROUP BY accomodation_id )
      AS reviewData ON accomodations.id = reviewData.accomodation_id

    INNER JOIN (
        SELECT 
          accomodation_categories.id,
          accomodation_categories.name
        FROM accomodation_categories
        WHERE 1=1 AND ((("null" IN (?))AND(id=id))OR(id IN (?))))
          AS category ON accomodations.category_id = category.id
  
    INNER JOIN (
      SELECT 
        availability_promotion_filters.accomodation_id,
        JSON_ARRAYAGG(reserve_id) AS reserve
      FROM availability_promotion_filters
        LEFT JOIN reserves ON availability_promotion_filters.reserve_id = reserves.id
        WHERE 1=1 AND ((("null" IN (?))AND(reserve_id=reserve_id))OR(reserve_id IN (?)))        
        GROUP BY availability_promotion_filters.accomodation_id ) 
      AS reserve ON accomodations.id = reserve.accomodation_id
    
    INNER JOIN (
		  SELECT 
			  hotel_cottage_camping_hanok_filters.accomodation_id,
			  JSON_ARRAYAGG(grade_id) AS grade
		  FROM hotel_cottage_camping_hanok_filters
        LEFT JOIN grades ON hotel_cottage_camping_hanok_filters.grade_id = grades.id
        WHERE 1=1 AND ((("null" IN (?))AND(grade_id=grade_id))OR(grade_id IN (?)))
        GROUP BY hotel_cottage_camping_hanok_filters.accomodation_id ) 
      AS grade ON accomodations.id = grade.accomodation_id

    INNER JOIN (
      SELECT 
        accomodation_facilities.accomodation_id,
        JSON_ARRAYAGG(facility_id) AS facility
      FROM accomodation_facilities
        LEFT JOIN facilities ON accomodation_facilities.facility_id = facilities.id
        WHERE 1=1 AND ((("null" IN (?))AND(facility_id=facility_id))OR(facility_id IN (?)))
        GROUP BY accomodation_facilities.accomodation_id ) 
      AS facility ON accomodations.id = facility.accomodation_id

    INNER JOIN (
      SELECT
        accomodation_rooms.accomodation_id, 
        MIN(accomodation_rooms.capacity) AS capacity,
        FORMAT(MIN(accomodation_rooms.original_price),0) AS price,
        FORMAT(MIN(accomodation_rooms.sale_price), 0) AS saleprice,
        MIN(room_availability_checks.remain) AS remain
      FROM accomodation_rooms
        LEFT JOIN 
          room_availability_checks ON accomodation_rooms.id = room_availability_checks.room_id
        WHERE 1=1 AND ((("null" IN (?))AND(capacity=capacity))OR(capacity >= (?)))
        GROUP BY accomodation_rooms.accomodation_id )
      AS rooms ON accomodations.id = rooms.accomodation_id

    INNER JOIN (
      SELECT
        accomodation_rooms.accomodation_id,
        JSON_ARRAYAGG(room_bed_numbers.room_id) AS room_id, 
        JSON_ARRAYAGG(room_bed_numbers.bed_type_id) AS bed_type
      FROM accomodation_rooms
        LEFT JOIN
          room_bed_numbers ON accomodation_rooms.id = room_bed_numbers.room_id
        WHERE 1=1 AND ((("null" IN (?))AND(bed_type_id=bed_type_id))OR(bed_type_id IN(?))) 
        GROUP BY accomodation_rooms.accomodation_id )
      AS bed_type ON accomodations.id = bed_type.accomodation_id
          
      ORDER BY 
      CASE ?
        WHEN "highprice" then price
        WHEN "score" then score END desc,
      CASE ?
        WHEN "lowprice" then price END asc
    
    `,
    [
      accno,
      accno,
      reserve,
      reserve,
      grade,
      grade,
      facility,
      facility,
      persons,
      persons,
      bed_type,
      bed_type,
      date1,
      date2,
      sort,
    ]
  );
  return accomodationFilter;
};

const accomodationData = async (acno) => {
  const roomData = await myDataSource.query(
    `
    SELECT
      accomodations.id as id,
      grades.name as rating,
      accomodations.name as name,
      score,
      review,
      accomodations.latitude as lat,
      accomodations.longitude as lng,
      accomodations.address as address,
      accomodations.ceo as ceo,
      accomodations.event as event

    FROM accomodations

    LEFT JOIN
      hotel_cottage_camping_hanok_filters ON accomodations.id = hotel_cottage_camping_hanok_filters.accomodation_id
    LEFT JOIN
      grades ON hotel_cottage_camping_hanok_filters.grade_id = grades.id

    LEFT JOIN (
      SELECT
        accomodation_id,
        round(avg(rating),1) as score,
        count(id) as review
      FROM reviews
      WHERE accomodation_id = accomodation_id
      GROUP BY accomodation_id )
      AS reviewData ON accomodations.id = reviewData.accomodation_id

    WHERE accomodations.id = ?
  `,
    [acno]
  );
  return roomData;
};

const hotelImg = async (acno) => {
  console.log("detailPage dao");

  const hotelImg = await myDataSource.query(
    `
    SELECT 
      images.id, images.image AS url 
    FROM images
    
    LEFT JOIN
	    accomodation_images ON images.id = accomodation_images.image_id
    LEFT JOIN
	    accomodations ON accomodation_images.accomodation_id = accomodations.id
    
    WHERE accomodations.id = ?
    `,
    [acno]
  );
  return hotelImg;
};

const roomData = async (acno) => {
  const roomData = await myDataSource.query(
    `
    SELECT 
	  accomodation_rooms.id AS id,
      accomodation_rooms.name AS type,
      room_availability_checks.remain as remain,
      accomodation_rooms.sale_price AS price
    FROM accomodations

    INNER JOIN
	    accomodation_rooms ON accomodations.id = accomodation_rooms.accomodation_id
    LEFT JOIN
	    room_availability_checks ON accomodation_rooms.id = room_availability_checks.room_id

    WHERE accomodations.id = ?
    `,
    [acno]
  );
  return roomData;
};

const roomPicture = async (acno) => {
  const roomPicture = await myDataSource.query(
    `
    SELECT 
	    pictures.id AS id,
      pictures.pictures AS url
    FROM accomodations

    INNER JOIN
	    accomodation_rooms ON accomodations.id = accomodation_rooms.accomodation_id
    INNER JOIN
	    room_pictures ON accomodation_rooms.id = room_pictures.room_id
    INNER JOIN
	    pictures ON room_pictures.picture_id = pictures.id

    WHERE accomodation_rooms.id = ?
    `,
    [acno]
  );
  return roomPicture;
};

const accomodationSearch = async (
  keyword,
  accno,
  reserve,
  grade,
  facility,
  persons,
  bed_type,
  sort,
  date1,
  date2
) => {
  console.log("accomodation search dao");

  const accomodationSearch = await myDataSource.query(
    `
    SELECT
    accomodations.id as id,
    grades.name as rating,
    accomodations.name as name,
    accomodations.thumbnail_image as img,
    score,
    review,
    accomodations.latitude as lat,
    accomodations.longitude as lng,
    price,
    saleprice

    FROM accomodations

     LEFT JOIN
        hotel_cottage_camping_hanok_filters ON accomodations.id = hotel_cottage_camping_hanok_filters.accomodation_id
    LEFT JOIN
      grades ON hotel_cottage_camping_hanok_filters.grade_id = grades.id
    LEFT JOIN 
      accomodation_locations ON accomodations.location_id = accomodation_locations.id

    INNER JOIN (
      SELECT
        accomodation_id,
        round(avg(rating),1) as score,
        count(id) as review
      FROM reviews
      WHERE accomodation_id = accomodation_id
      GROUP BY accomodation_id )
      AS reviewData ON accomodations.id = reviewData.accomodation_id


    INNER JOIN (
      SELECT 
        accomodation_categories.id,
        accomodation_categories.name
      FROM accomodation_categories
      WHERE 1=1 AND ((("null" IN (?))AND(id=id))OR(id IN (?))))
        AS category ON accomodations.category_id = category.id

    INNER JOIN (
      SELECT 
        availability_promotion_filters.accomodation_id,
        JSON_ARRAYAGG(reserve_id) AS reserve
      FROM availability_promotion_filters
        LEFT JOIN reserves ON availability_promotion_filters.reserve_id = reserves.id
        WHERE 1=1 AND ((("null" IN (?))AND(reserve_id=reserve_id))OR(reserve_id IN (?)))        
        GROUP BY availability_promotion_filters.accomodation_id ) 
      AS reserve ON accomodations.id = reserve.accomodation_id
  
    INNER JOIN (
      SELECT 
        hotel_cottage_camping_hanok_filters.accomodation_id,
        JSON_ARRAYAGG(grade_id) AS grade
      FROM hotel_cottage_camping_hanok_filters
        LEFT JOIN grades ON hotel_cottage_camping_hanok_filters.grade_id = grades.id
        WHERE 1=1 AND ((("null" IN (?))AND(grade_id=grade_id))OR(grade_id IN (?)))
        GROUP BY hotel_cottage_camping_hanok_filters.accomodation_id ) 
      AS grade ON accomodations.id = grade.accomodation_id

    INNER JOIN (
      SELECT 
        accomodation_facilities.accomodation_id,
        JSON_ARRAYAGG(facility_id) AS facility
      FROM accomodation_facilities
        LEFT JOIN facilities ON accomodation_facilities.facility_id = facilities.id
        WHERE 1=1 AND ((("null" IN (?))AND(facility_id=facility_id))OR(facility_id IN (?)))
        GROUP BY accomodation_facilities.accomodation_id ) 
      AS facility ON accomodations.id = facility.accomodation_id

    INNER JOIN (
      SELECT
        accomodation_rooms.accomodation_id, 
        MIN(accomodation_rooms.capacity) AS capacity,
        MIN(accomodation_rooms.original_price) AS price,
        MIN(room_availability_checks.remain) AS remain,
        MIN(accomodation_rooms.sale_price) AS saleprice
      FROM accomodation_rooms
        LEFT JOIN 
          room_availability_checks ON accomodation_rooms.id = room_availability_checks.room_id
        WHERE 1=1 AND ((("null" IN (?))AND(capacity=capacity))OR(capacity >= (?)))
        GROUP BY accomodation_rooms.accomodation_id )
      AS rooms ON accomodations.id = rooms.accomodation_id

    LEFT JOIN (
      SELECT
        accomodation_rooms.accomodation_id,
        JSON_ARRAYAGG(room_bed_numbers.room_id) AS room_id, 
        JSON_ARRAYAGG(room_bed_numbers.bed_type_id) AS bed_type
      FROM accomodation_rooms
        LEFT JOIN
          room_bed_numbers ON accomodation_rooms.id = room_bed_numbers.room_id
        WHERE 1=1 AND ((("null" IN (?))AND(bed_type_id=bed_type_id))OR(bed_type_id IN(?))) 
        GROUP BY accomodation_rooms.accomodation_id )
      AS bed_type ON accomodations.id = bed_type.accomodation_id
    
    LEFT JOIN (
      SELECT
        accomodation_rooms.accomodation_id,
        JSON_ARRAYAGG(room_availability_checks.room_id) AS room_id,
        JSON_ARRAYAGG(room_availability_checks.date) AS date,
        JSON_ARRAYAGG(room_availability_checks.availability) AS availability
      FROM accomodation_rooms
        LEFT JOIN
          room_availability_checks ON accomodation_rooms.id = room_availability_checks.room_id
        WHERE date BETWEEN ? AND ? AND availability != 0
        GROUP BY accomodation_rooms.accomodation_id )
    AS date ON accomodations.id = date.accomodation_id

  WHERE 
    accomodations.name REGEXP ?
    OR accomodations.address REGEXP ?
    OR accomodation_locations.name REGEXP ?

    ORDER BY 
    CASE ?
      WHEN "highprice" then saleprice
      WHEN "score" then score END desc,
    CASE ?
      WHEN "lowprice" then saleprice END asc

    `,
    [
      accno,
      accno,
      reserve,
      reserve,
      grade,
      grade,
      facility,
      facility,
      persons,
      persons,
      bed_type,
      bed_type,
      date1,
      date2,
      keyword,
      keyword,
      keyword,
      sort,
      sort,
    ]
  );
  return accomodationSearch;
};
module.exports = {
  accomodationCategory,
  accomodationFilter,
  accomodationData,
  hotelImg,
  roomData,
  roomPicture,
  accomodationSearch,
};
