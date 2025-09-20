# ASC 606 License + Support Revenue Recognition Calculator - Demo Examples

## Overview

This calculator handles the specific scenario where:
- A software company sells a license + support bundle
- Total invoice amount is allocated between license (typically 85%) and support (typically 15%)
- License revenue is recognized at point in time (Day 1)
- Support revenue is recognized ratably over the contract term

## ASC 606 Compliance Framework

### Step 1: Identify the Contract
- Software license + support services contract with defined terms
- Clear payment terms and deliverables

### Step 2: Identify Performance Obligations
1. **Software License**: Distinct performance obligation satisfied at point in time
2. **Support Services**: Distinct performance obligation satisfied over time

### Step 3: Determine Transaction Price
- Total day 1 invoice amount
- Allocated based on standalone selling prices (SSP)

### Step 4: Allocate Transaction Price
- License: Based on SSP (commonly 85% of total)
- Support: Based on SSP (commonly 15% of total)

### Step 5: Recognize Revenue
- License: When customer gains control (Day 1)
- Support: Ratably as services are provided over contract term

## Example 1: Standard Software License + Support (3-Year Term)

**Scenario:** Enterprise software company sells 3-year license + support bundle

**Inputs:**
- Total Day 1 Invoice: $300,000
- Contract Term: 3 years
- License Allocation: 85%
- Support Allocation: 15%

**ASC 606 Calculation:**
- License Amount: $300,000 × 85% = $255,000
- Support Amount: $300,000 × 15% = $45,000

**Revenue Recognition Schedule:**
- **Year 1:** $255,000 (license) + $15,000 (support) = $270,000
- **Year 2:** $0 (license) + $15,000 (support) = $15,000
- **Year 3:** $0 (license) + $15,000 (support) = $15,000
- **Monthly Support Recognition:** $1,250/month

## Example 2: Large Enterprise Deal (5-Year Term)

**Scenario:** Major enterprise deployment with extended support

**Inputs:**
- Total Day 1 Invoice: $1,000,000
- Contract Term: 5 years
- License Allocation: 85%
- Support Allocation: 15%

**ASC 606 Calculation:**
- License Amount: $1,000,000 × 85% = $850,000
- Support Amount: $1,000,000 × 15% = $150,000

**Revenue Recognition Schedule:**
- **Year 1:** $850,000 (license) + $30,000 (support) = $880,000
- **Years 2-5:** $0 (license) + $30,000 (support) = $30,000 each year
- **Monthly Support Recognition:** $2,500/month

## Example 3: Custom SSP Allocation

**Scenario:** Company with different SSP analysis results

**Inputs:**
- Total Day 1 Invoice: $500,000
- Contract Term: 2 years
- License Allocation: 80% (based on company's SSP analysis)
- Support Allocation: 20% (based on company's SSP analysis)

**ASC 606 Calculation:**
- License Amount: $500,000 × 80% = $400,000
- Support Amount: $500,000 × 20% = $100,000

**Revenue Recognition Schedule:**
- **Year 1:** $400,000 (license) + $50,000 (support) = $450,000
- **Year 2:** $0 (license) + $50,000 (support) = $50,000
- **Monthly Support Recognition:** $4,167/month

## Key ASC 606 Considerations

### Standalone Selling Price (SSP) Determination

**Observable SSP:**
- Use actual prices when license and support are sold separately
- Historical pricing data for similar arrangements

**Estimated SSP (when not directly observable):**
- **Adjusted market assessment:** Competitor pricing analysis
- **Expected cost plus margin:** Cost-based pricing with appropriate margin
- **Residual approach:** Only when SSP is highly variable or uncertain

### License vs. Support Characteristics

**Software License (Point in Time Recognition):**
- ✅ Customer has legal title to the software
- ✅ Customer has physical possession (download/installation)
- ✅ Customer accepts the software
- ✅ Customer bears risks and rewards of ownership
- ✅ Entity has right to payment

**Support Services (Over Time Recognition):**
- ✅ Customer simultaneously receives and consumes benefits
- ✅ Entity's performance creates/enhances asset customer controls
- ✅ Entity has right to payment for performance completed to date

### Common Allocation Percentages by Industry

**Enterprise Software:**
- License: 80-90%
- Support: 10-20%

**SaaS/Cloud Solutions:**
- Hosting/Platform: 70-85%
- Support/Professional Services: 15-30%

**On-Premise + Cloud Hybrid:**
- License: 60-75%
- Support: 15-25%
- Cloud Services: 10-20%

## Validation and Testing

### Calculator Features

1. **Real-time Allocation Validation**: Ensures percentages total 100%
2. **ASC 606 Step Compliance**: Validates each step of the revenue recognition process
3. **Professional Display**: Shows detailed breakdown by performance obligation
4. **Monthly/Annual Views**: Provides both perspectives for financial planning

### Best Practices

1. **Document SSP Analysis**: Maintain supporting documentation for allocation percentages
2. **Regular Review**: Update SSP allocations based on current market data
3. **Audit Preparation**: Ensure calculator outputs support financial statement assertions
4. **Contract Review**: Validate that contracts clearly define performance obligations

## Technical Implementation

### Browser Compatibility
- Modern browsers with ES6+ support
- Mobile-responsive design
- No external dependencies

### Data Validation
- Input sanitization and validation
- Mathematical precision for financial calculations
- Error handling and user feedback

### Security
- Client-side only (no data transmission)
- No personal or financial data storage
- HTTPS deployment recommended

---

**Need Help?** This calculator implements ASC 606 revenue recognition standards for software license + support bundles. For complex scenarios or audit requirements, consult with qualified accounting professionals.