package computerdatabase.interactions

import java.time.LocalDateTime
import java.time.format.DateTimeFormatter

import io.gatling.core.Predef._
import io.gatling.http.Predef._

object ProveInteraction {
  val format = "yyyy-MM-dd"
  val dtf = DateTimeFormatter.ofPattern(format)
  val today = LocalDateTime.now().format(dtf)

  val proof = exec(
    _.set("today", today))
    .exec(
    http("Prove Owner") // let's give proper names, as they are displayed in the reports
      .post("/prove")
      .formParam("""cp""", """2000""") // Note the triple double quotes: used in Scala for protecting a whole chain of characters (no need for backslash)
      .formParam("""timestamp""", """${today}T00:00Z""")
      .formParam("""policy""", """1""")
  )
}