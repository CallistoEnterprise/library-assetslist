import { AuditRiskLevel } from "./types"

export const getRiskLevelDescription = (riskLevel?: AuditRiskLevel) => {
    if(!riskLevel) return 'Audited'
    if(riskLevel === AuditRiskLevel.Safe) return 'Audit: SAFE'
    return `Audit: ${riskLevel} risk` 
}

export const getRiskLevelColor = (riskLevel?: AuditRiskLevel) => {
    switch (riskLevel) {
        case AuditRiskLevel.Safe: return '#0b942b'
        case AuditRiskLevel.Low: return '#43c861'
        case AuditRiskLevel.Medium: return '#ef801a'
        case AuditRiskLevel.High: return '#c22821'
        case AuditRiskLevel.Critical: return '#680702'
        default: return '#0b942b'
    }
}