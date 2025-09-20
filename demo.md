# ASC 606 Revenue Recognition Calculator - Demo Examples

## Example 1: Software License (Output Method)

**Scenario:** A company sells a 3-year software license for $300,000. They deliver 30% of functionality on day 1, and the remaining functionality is delivered based on feature releases.

**Inputs:**
- Total Transaction Price: $300,000
- Contract Term: 3 years
- Day 1 Delivery: $90,000
- Recognition Method: Output Method
- Total Units: 1000 features
- Year 1: 400 features
- Year 2: 300 features
- Year 3: 300 features

**Expected Results:**
- Day 1 Recognition: $90,000
- Remaining Amount: $210,000
- Year 1: $84,000 (40% of remaining)
- Year 2: $63,000 (30% of remaining)
- Year 3: $63,000 (30% of remaining)

## Example 2: Construction Contract (Input Method)

**Scenario:** A construction project worth $500,000 over 2 years, with no day 1 delivery, recognized based on costs incurred.

**Inputs:**
- Total Transaction Price: $500,000
- Contract Term: 2 years
- Day 1 Delivery: $0
- Recognition Method: Input Method
- Total Expected Costs: $300,000
- Year 1 Costs: $180,000
- Year 2 Costs: $120,000

**Expected Results:**
- Day 1 Recognition: $0
- Remaining Amount: $500,000
- Year 1: $300,000 (60% of total based on 60% costs)
- Year 2: $200,000 (40% of total based on 40% costs)

## Key Features Implemented

1. **Progress Measurement Methods:**
   - Output Method: Based on units delivered, milestones, or direct value transfer
   - Input Method: Based on costs incurred or labor hours

2. **Multi-Year Allocation:**
   - Supports contracts up to 10 years
   - Dynamic year input generation
   - Cumulative progress tracking

3. **Day 1 Recognition:**
   - Separate field for immediate delivery recognition
   - Automatically calculates remaining amount for allocation

4. **Validation:**
   - Ensures inputs don't exceed totals
   - Validates all required fields
   - Prevents negative values

5. **Professional Display:**
   - Summary cards showing key amounts
   - Detailed schedule table
   - Progress percentages and cumulative tracking
   - Currency formatting

## ASC 606 Compliance

This calculator implements the core principles from ASC 606 Section 4 - "Recognize Revenue for Multi-Year Obligations":

- **Measure Progress:** Choose between output and input methods
- **Revenue Recognition Methods:** 
  - Output Methods: Direct measurements of value transferred
  - Input Methods: Entity's efforts or inputs toward completion
- **Method Selection:** Reflects the transfer of control to the customer
- **Multi-jurisdiction Support:** Handles revenue allocation across different periods