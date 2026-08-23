# Architecture

High-level flow:

User / Agent
  -> authenticated organisation/workspace
  -> taxpayer/client
  -> tax year
  -> return
  -> schedules/forms
  -> validation
  -> calculation
  -> review/declaration
  -> payment entitlement
  -> HMRC submission
  -> HMRC response/receipt
  -> immutable audit record
  -> downloadable records

Every taxpayer-scoped record must carry organisation/workspace/client scope.
