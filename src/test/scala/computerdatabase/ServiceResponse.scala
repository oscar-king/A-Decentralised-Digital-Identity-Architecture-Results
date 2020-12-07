package computerdatabase

import java.time.LocalDateTime
import java.time.format.DateTimeFormatter

import io.gatling.core.Predef._
import io.gatling.http.Predef._

import scala.concurrent.duration._


class ServiceResponse extends Simulation {
  val format = "yyyy-MM-dd"
  val dtf = DateTimeFormatter.ofPattern(format)
  val today = LocalDateTime.now().format(dtf)

  val httpProtocol = http
    .baseUrl("http://127.0.0.1:5003") // Here is the root for all relative URLs
    .acceptHeader("text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8") // Here are the common headers
    .acceptEncodingHeader("gzip, deflate")
    .acceptLanguageHeader("en-US,en;q=0.5")
    .userAgentHeader("Mozilla/5.0 (Macintosh; Intel Mac OS X 10.8; rv:16.0) Gecko/20100101 Firefox/16.0")

  val scn = scenario("Service Response")
      .exec(_.set("today", today))
      .exec(
        http("Service Response")
        .post("/response")
        .body(RawFileBody("response.json")).asJson
      )

  setUp(scn.inject(
//    rampUsers(50) during (10 seconds),
    constantUsersPerSec(1) during (20 minutes)
  ).protocols(httpProtocol))
}
