# ASC 606 Term-Based Software + Support Revenue Recognition Calculator - Demo Examples

## Overview

This calculator handles **electronically delivered term-based software licenses** (like Coder) with proper ASC 606 revenue recognition methodology.

### Key Insight: Electronic Delivery = Point-in-Time Recognition

**For Coder's Term-Based Software with Electronic Delivery:**

Even though the license is **term-based** (expires after contract term), the **electronic delivery** method means:

- ✅ **Customer gains control** when software is electronically delivered
- ✅ **Customer can benefit** from the software immediately
- ✅ **Customer accepts** the software (download/installation)
- ✅ **Coder has right to payment** for delivered license
- ✅ **No alternative use** to Coder once delivered

**Result: License revenue recognized at point in time (upfront), Support over time**

## Electronic Delivery vs Physical Delivery

### Electronic Delivery (Coder's Model)
**ASC 606 Analysis:**
- Customer downloads/installs software immediately
- Customer gains control at point of delivery
- **License Recognition**: Point in time (Year 1)
- **Support Recognition**: Over time (ratably)
- **Pattern**: Front-loaded license, ratable support

### Physical Delivery or Implementation Services
**ASC 606 Analysis:**
- Customer may not gain control until implementation complete
- May require over-time recognition if implementation is substantial
- Different pattern depending on delivery complexity

## Example: Coder's Electronic Delivery Model

### Default Contract Example

**Contract Details:**
- Annual License SSP: $2,000
- Annual Support SSP: $1,000
- Contract Term: 3 years
- Contract Price: $12,000
- **Delivery**: Electronic (immediate download/access)

**SSP Calculation:**
- License SSP: $2,000 × 3 = $6,000
- Support SSP: $1,000 × 3 = $3,000
- Total SSP: $9,000

**Allocation:**
- License: ($6,000 ÷ $9,000) × $12,000 = **$8,000** (66.67%)
- Support: ($3,000 ÷ $9,000) × $12,000 = **$4,000** (33.33%)

**Revenue Recognition Schedule:**

| Year | License | Support | Total | Cumulative |
|------|---------|---------|-------|------------|
| 1 | $8,000 | $1,333 | $9,333 | $9,333 |
| 2 | $0 | $1,333 | $1,333 | $10,666 |
| 3 | $0 | $1,334 | $1,334 | $12,000 |

**Key Metrics:**
- **Year 1 Revenue**: $9,333 (77.8% of contract)
- **Monthly Support**: $111/month
- **Recognition Pattern**: Front-loaded due to license upfront

### Large Enterprise Contract

**Contract Details:**
- Annual License SSP: $5,000
- Annual Support SSP: $2,000
- Contract Term: 2 years
- Contract Price: $13,000

**SSP Calculation:**
- License SSP: $5,000 × 2 = $10,000
- Support SSP: $2,000 × 2 = $4,000
- Total SSP: $14,000

**Allocation:**
- License: ($10,000 ÷ $14,000) × $13,000 = **$9,286** (71.43%)
- Support: ($4,000 ÷ $14,000) × $13,000 = **$3,714** (28.57%)

**Revenue Recognition Schedule:**

| Year | License | Support | Total | Cumulative |
|------|---------|---------|-------|------------|
| 1 | $9,286 | $1,857 | $11,143 | $11,143 |
| 2 | $0 | $1,857 | $1,857 | $13,000 |

## ASC 606 Analysis for Electronic Delivery

### Step 1: Identify the Contract
- Term-based software license + support agreement
- Electronic delivery mechanism
- Fixed term with clear start/end dates
- Enforceable rights and obligations

### Step 2: Identify Performance Obligations

**Two Distinct Performance Obligations:**

1. **Term-Based Software License**
   - Customer can benefit from license independently
   - License is distinct from support services
   - **Delivery Method**: Electronic (immediate access)
   - **Control Transfer**: Point in time

2. **Support Services**
   - Ongoing technical support throughout term
   - Stand-ready obligation
   - **Delivery Method**: Ongoing services
   - **Control Transfer**: Over time

### Step 3: Determine Transaction Price
- Fixed contract amount
- No significant financing component (typical terms)
- No variable consideration in basic scenarios

### Step 4: Allocate Transaction Price
- **Method**: Relative standalone selling prices
- **License SSP**: Annual rate × contract term
- **Support SSP**: Annual rate × contract term
- **Allocation**: Proportional to relative SSPs

### Step 5: Recognize Revenue

**Software License (Point in Time):**
- ✅ **Control Transfer**: Customer gains control when electronically delivered
- ✅ **Physical Possession**: Customer downloads/installs software
- ✅ **Legal Title**: Customer has contractual right to use
- ✅ **Risks and Rewards**: Customer bears risks of software use
- ✅ **Acceptance**: Customer can immediately benefit from software

**Support Services (Over Time):**
- ✅ **Simultaneous Receipt**: Customer receives benefits as services provided
- ✅ **No Alternative Use**: Support is customer-specific
- ✅ **Right to Payment**: Enforceable right for services performed

## Comparison with Other Software Models

### SaaS/Cloud Software
- **Delivery**: Customer accesses vendor's servers
- **Control**: Customer doesn't control the software
- **Recognition**: Over time (subscription model)
- **Pattern**: Ratable throughout contract

### Traditional Perpetual + Support
- **Delivery**: Perpetual license + ongoing support
- **Control**: Customer controls license indefinitely
- **Recognition**: License point in time, support over time
- **Pattern**: Similar to Coder's model

### Coder's Term-Based + Electronic Delivery
- **Delivery**: Term license electronically delivered + support
- **Control**: Customer controls software during term
- **Recognition**: License point in time, support over time
- **Pattern**: Front-loaded license, ratable support

## Business Impact Analysis

### Financial Statement Impact

**Revenue Recognition Pattern:**
- **Year 1**: High revenue due to upfront license recognition
- **Subsequent Years**: Lower, consistent support revenue
- **Cash Flow**: Typically collected upfront or per payment terms
- **Deferred Revenue**: Primarily support obligations

**Metrics Impact:**
- **Annual Recurring Revenue (ARR)**: Includes ratable support portion
- **Revenue Growth**: May show volatility based on license timing
- **Gross Margins**: Typically higher on license, lower on support

### Operational Considerations

**Contract Management:**
- Track license delivery dates for recognition timing
- Monitor support obligations throughout contract term
- Manage renewal cycles and pricing

**Systems Requirements:**
- Automated license delivery tracking
- Support obligation monitoring
- Revenue recognition automation

## Industry Best Practices

### SSP Determination
1. **Observable Prices**: Use actual standalone sales when available
2. **Market Assessment**: Research competitive pricing
3. **Cost Plus Margin**: Calculate based on delivery costs + margin
4. **Regular Updates**: Refresh SSP analysis annually

### Documentation Requirements
1. **Delivery Evidence**: Log electronic delivery timestamps
2. **Customer Acceptance**: Document customer access/installation
3. **Support Obligations**: Define included support services
4. **Contract Terms**: Clear start/end dates and renewal terms

### Audit Considerations
1. **Control Transfer**: Document when customer gains control
2. **SSP Support**: Maintain evidence for pricing methodology
3. **System Controls**: Automated recognition where possible
4. **Manual Overrides**: Document and approve exceptions

## Technical Implementation

### Calculator Features
- **Electronic Delivery Focus**: Optimized for point-in-time license recognition
- **Real-Time SSP**: Dynamic calculation based on annual rates and terms
- **Visual Allocation**: See exact ASC 606 methodology
- **Coder-Specific Defaults**: Pre-loaded with typical contract values
- **Professional Reporting**: Generate schedules for financial planning

### Integration Capabilities
- Standalone web application
- API endpoints for system integration
- CSV/Excel export functionality
- Audit trail maintenance

---

**For Coder Teams:** This calculator reflects the correct ASC 606 treatment for electronically delivered term-based software. The key insight is that electronic delivery enables immediate control transfer, making license revenue recognizable at point in time regardless of the term-based nature of the license.