package com.smasy10.apple.repository;

import com.smasy10.apple.domain.*;
import com.smasy10.apple.domain.dto.PlaceReviewDto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

import static com.smasy10.apple.controller.PlaceController.FIND_ALL_PLACE_SEARCH_REVIEW;

public interface ReplyRepository extends JpaRepository<Reply,Long> {
    /*public final static String FIND_BY_ID_STATE = "SELECT  FROM Table1 a RIGHT JOIN a.table2Obj b " +
            "WHERE b.column = :id" +
            "AND a.id NOT IN (SELECT c.columnFromA from a.table3Obj c where state = :state)";

    @Query(FIND_BY_ID_STATE)
    public List<Alert> findXXXXXXXX(@Param("id") Long id, @Param("state") Long state);
*/


/*
    @Query("FROM Reply r WHERE r.room =: roomId ")
    List<Reply> findAllByRoom(Long roomId);
*/

    List<Reply> findAllByRoom(Room room);

    Optional<Reply> findById(Long id);

    void deleteAllByRoom(Room room);

    List<Reply> findAllByPlace(Place place);

    public final static Long zero = 0L;

    @Query("FROM Reply r WHERE r.place >= :place ")
    List<Reply> findAllByPlaceId(@Param("place")Place place);

    //List<Reply> findAllByOrderByDate();

   /* @Query(FIND_ALL_PLACE_SEARCH_REVIEW)
    List<Reply> findAllByText(@Param("text") String text);*/
}
