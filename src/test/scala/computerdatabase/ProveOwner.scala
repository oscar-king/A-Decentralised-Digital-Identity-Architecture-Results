package computerdatabase

import io.gatling.core.Predef._
import io.gatling.http.Predef._

import scala.concurrent.duration._
import interactions.ProveInteraction


class ProveOwner extends Simulation {

  val httpProtocol = http
    .baseUrl("http://127.0.0.1:5000") // Here is the root for all relative URLs
    .acceptHeader("text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8") // Here are the common headers
    .acceptEncodingHeader("gzip, deflate")
    .acceptLanguageHeader("en-US,en;q=0.5")
    .userAgentHeader("Mozilla/5.0 (Macintosh; Intel Mac OS X 10.8; rv:16.0) Gecko/20100101 Firefox/16.0")

  val scn = scenario("Prove Ownership")
    .exec(ProveInteraction.proof)

  setUp(scn.inject(
    constantUsersPerSec(9) during (20 minutes)
  ).protocols(httpProtocol))
}
