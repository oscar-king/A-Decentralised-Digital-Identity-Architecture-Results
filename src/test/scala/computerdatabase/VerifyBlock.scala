package computerdatabase

import java.time.LocalDateTime
import java.time.format.DateTimeFormatter

import io.gatling.core.Predef._
import io.gatling.http.Predef._

import scala.concurrent.duration._


class VerifyBlock extends Simulation {
  val format = "yyyy-MM-dd"
  val dtf = DateTimeFormatter.ofPattern(format)
  val today = LocalDateTime.now().format(dtf)

  val httpProtocol = http
    .baseUrl("http://127.0.0.1:5000") // Here is the root for all relative URLs
    .acceptHeader("text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8") // Here are the common headers
    .acceptEncodingHeader("gzip, deflate")
    .acceptLanguageHeader("en-US,en;q=0.5")
    .userAgentHeader("Mozilla/5.0 (Macintosh; Intel Mac OS X 10.8; rv:16.0) Gecko/20100101 Firefox/16.0")

  val scn = scenario("Verify Block")
      .exec(_.set("today", today))
      .exec(
        http("Verify Block")
        .post("/verify")
        .formParam("""cp""", """2000""")
        .formParam("""timestamp""", """${today}T00:00Z""")
        .formParam("""policy""", """1""")
      )


  setUp(scn.inject(
    constantUsersPerSec(10) during (5 minutes)
  ).protocols(httpProtocol))
}
